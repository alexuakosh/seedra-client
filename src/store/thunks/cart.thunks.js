import axios from "axios"; 
import * as Sentry from "@sentry/react";
import { API } from "../../app/constants";
import {
  downloadCartSuccess,
  downloadCartRequested,
  downloadCartError,
  addCartRequested,
  addCartSuccess,
  addCartError,
  addProductToCartRequested,
  addProductToCartSuccess,
  addProductToCartError,
  decreaseQuantityRequested,
  decreaseQuantitySuccess,
  decreaseQuantityError,
  deleteProductFromCartRequest,
  deleteProductFromCartSuccess,
  deleteProductFromCartError,
  editStart,
  editSuccess,
  editError,
  orderAmountUpdated,
  clearProductsInCartSuccess,
  clearProductsInCartError,
} from "../actions/cart.actions";




const countTotalAmountOrder = () => (dispatch, getState) => {
  const { cart } = getState().cart;
  const sumOrder = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.currentPrice * currentValue.cartQuantity,
    0
  );

  dispatch(orderAmountUpdated(sumOrder));
};

const concatCarts = (localCart, remoteCart) =>
  [...localCart, ...remoteCart].reduce((accumulator, cartItem) => {
    const isDublicate = accumulator.some((item) => item.id === cartItem.id);
    if (!isDublicate) {
      return [...accumulator, cartItem];
    }
    return accumulator;
  }, []);

const fetchCart = (slidesItemId) => async (dispatch, getState) => {
  const token = localStorage.getItem("jwt");
  dispatch(downloadCartRequested());
  const { cart } = getState().cart;
  if (token) {
    try {
      const response = await axios.get(`${API}cart`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      let cartFromApi;
      response.data === null
        ? (cartFromApi = [])
        : (cartFromApi = response.data.products.map((cartProduct) => ({
            id: cartProduct.product._id,
            imageUrls: cartProduct.product.imageUrls,
            name: cartProduct.product.name,
            currentPrice:
              cartProduct.cartQuantity > 10 ||
              slidesItemId?.includes(cartProduct.product._id)
                ? cartProduct.product.discountPrice
                : cartProduct.product.currentPrice,
            cartQuantity: cartProduct.cartQuantity,
            startingPrice: cartProduct.product.currentPrice,
            discountPrice: cartProduct.product.discountPrice,
          })));
      let newCart = [...cartFromApi];
      if (Array.isArray(cart) && cart.length > 0) {
        newCart = concatCarts(cart, cartFromApi);
      }
      const cartForAPI = newCart.map((item) => ({
        product: item.id, 
        cartQuantity: item.cartQuantity,
      }));
      await axios.put(
        `${API}cart`,
        { products: cartForAPI },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      dispatch(downloadCartSuccess(newCart));
    } catch (err) {
      dispatch(downloadCartError());
      Sentry.captureException(err);
    }
  } else {
    dispatch(downloadCartSuccess(cart));
  }
};

const addCart = (cart, slidesItemId) => (dispatch) => {
  dispatch(addCartRequested());
  const token = localStorage.getItem("jwt");
  if (token) {
    axios
      .post(`${API}cart`, cart, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        const newCart = response.data.products.map((cartProduct) => ({
          id: cartProduct.product._id,
          imageUrls: cartProduct.product.imageUrls,
          name: cartProduct.product.name,
          currentPrice:
            cartProduct.cartQuantity > 10 ||
            slidesItemId.includes(cartProduct.product._id)
              ? cartProduct.product.discountPrice
              : cartProduct.product.currentPrice,
          cartQuantity: cartProduct.cartQuantity,
          startingPrice: cartProduct.product.currentPrice,
          discountPrice: cartProduct.product.discountPrice,
        }));
        dispatch(addCartSuccess(newCart));
      })
      .catch((err) => {
        dispatch(addCartError());
        Sentry.captureException(err);
      });
  } else {
    dispatch(addCartSuccess(cart));
  }
};

const changeLocalCart = (
  cart,
  productId,
  calculateCartQuantity,
  name,
  currentPrice,
  imageUrls,
  startingPrice,
  discountPrice,
  slidesItemId
) => {
  let cartCopy;
  if (!cart) {
    cartCopy = [];
  } else {
    cartCopy = [...cart];
  }
  const product = cartCopy.find((cartItem) => productId === cartItem.id);

  if (product) {
    const newProduct = {
      ...product,
      imageUrls,
      name,
      currentPrice:
        calculateCartQuantity() > 10 || slidesItemId?.includes(productId)
          ? discountPrice
          : startingPrice,
      cartQuantity: calculateCartQuantity(product.cartQuantity),
      startingPrice,
      discountPrice,
    };
    const productIndex = cartCopy.findIndex(
      (cartItem) => productId === cartItem.id
    );
    cartCopy.splice(productIndex, 1, newProduct);
    return cartCopy;
  }

  const newProduct = {
    id: productId,
    imageUrls,
    name,
    currentPrice:
      calculateCartQuantity() > 10 || slidesItemId?.includes(productId)
        ? discountPrice
        : startingPrice,
    cartQuantity: calculateCartQuantity(),
    startingPrice,
    discountPrice,
  };
  const newCart = [...cartCopy, newProduct];
  return newCart;
};

const addProductToCart = (productId, slidesItemId) => (dispatch, getState) => {
  dispatch(addProductToCartRequested());
  const token = localStorage.getItem("jwt");

  if (token) {
    axios
      .put(`${API}cart/${productId}`, false, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        const cart = response.data.products.map((cartProduct) => ({
          id: cartProduct.product._id,
          imageUrls: cartProduct.product.imageUrls,
          name: cartProduct.product.name, 
          currentPrice:
            cartProduct.cartQuantity > 10 ||
            slidesItemId?.includes(cartProduct.product._id)
              ? cartProduct.product.discountPrice
              : cartProduct.product.currentPrice,
          cartQuantity: cartProduct.cartQuantity,
          startingPrice: cartProduct.product.currentPrice,
          discountPrice: cartProduct.product.discountPrice,
        }));
        dispatch(addProductToCartSuccess(cart));
      })
      .catch((err) => {
        dispatch(addProductToCartError());
        Sentry.captureException(err);
      });
  } else {
    const { cart } = getState().cart;
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === productId
        ? {
            ...cartItem,
            currentPrice:
              cartItem.cartQuantity + 1 > 10 ||
              slidesItemId?.includes(productId)
                ? cartItem.discountPrice
                : cartItem.startingPrice,
            cartQuantity: cartItem.cartQuantity + 1,
          }
        : cartItem
    );
    dispatch(addProductToCartSuccess(updatedCart));
  }
};

const changeProductQuantity =
  (
    productId,
    quantity,
    name,
    currentPrice,
    imageUrls,
    startingPrice,
    discountPrice,
    slidesItemId
  ) =>
  (dispatch, getState) => {
    dispatch(editStart());
    const token = localStorage.getItem("jwt");
    const { cart } = getState().cart;
    if (token) {
      const calculateQuantity = () => quantity;
      const updatedCart = changeLocalCart(
        cart,
        productId,
        calculateQuantity,
        name,
        currentPrice,
        imageUrls,
        startingPrice,
        discountPrice
      );
      const cartForAPI = updatedCart.map((item) => ({
        product: item.id,
        cartQuantity: item.cartQuantity,
      }));
      axios
        .put(
          `${API}cart`,
          { products: cartForAPI },
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((response) => {
          const newCart = response.data.products.map((cartProduct) => ({
            id: cartProduct.product._id,
            imageUrls: cartProduct.product.imageUrls,
            name: cartProduct.product.name,
            currentPrice:
              cartProduct.cartQuantity > 10 || slidesItemId?.includes(productId)
                ? cartProduct.product.discountPrice
                : cartProduct.product.currentPrice,
            cartQuantity: cartProduct.cartQuantity,
            startingPrice: cartProduct.product.currentPrice,
            discountPrice: cartProduct.product.discountPrice,
          }));
          dispatch(editSuccess(newCart));
        })
        .catch((err) => {
          dispatch(editError());
          Sentry.captureException(err);
        });
    } else {
      const calculateQuantity = () => quantity;
      const updatedCart = changeLocalCart(
        cart,
        productId,
        calculateQuantity,
        name,
        currentPrice,
        imageUrls,
        startingPrice,
        discountPrice,
        slidesItemId
      );

      dispatch(editSuccess(updatedCart));
    }
  };

const decreaseProductQuantity =
  (productId, slidesItemId) => (dispatch, getState) => {
    dispatch(decreaseQuantityRequested());
    const token = localStorage.getItem("jwt");
    if (token) {
      axios
        .delete(`${API}cart/product/${productId}`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((response) => {
          const cart = response.data.products.map((cartProduct) => ({
            id: cartProduct.product._id,
            imageUrls: cartProduct.product.imageUrls,
            name: cartProduct.product.name,
            currentPrice:
              cartProduct.cartQuantity > 10 || slidesItemId?.includes(productId)
                ? cartProduct.product.discountPrice
                : cartProduct.product.currentPrice,
            cartQuantity: cartProduct.cartQuantity,
            startingPrice: cartProduct.product.currentPrice,
            discountPrice: cartProduct.product.discountPrice,
          }));
          dispatch(decreaseQuantitySuccess(cart));
        })
        .catch((err) => {
          dispatch(decreaseQuantityError());
          Sentry.captureException(err);
        });
    } else {
      const { cart } = getState().cart;
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === productId
          ? {
              ...cartItem,
              currentPrice:
                cartItem.cartQuantity - 1 > 10 ||
                slidesItemId.includes(cartItem.id)
                  ? cartItem.discountPrice
                  : cartItem.startingPrice,
              cartQuantity: cartItem.cartQuantity - 1,
            }
          : cartItem
      );

      dispatch(decreaseQuantitySuccess(updatedCart));
    }
  };

const deleteProductFromCart =
  (productId, slidesItemId) => (dispatch, getState) => {
    dispatch(deleteProductFromCartRequest());
    const token = localStorage.getItem("jwt");
    if (token) {
      axios
        .delete(`${API}cart/${productId}`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((response) => {
          const cart = response.data.products.map((cartProduct) => ({
            id: cartProduct.product._id,
            imageUrls: cartProduct.product.imageUrls,
            name: cartProduct.product.name,
            currentPrice:
              cartProduct.cartQuantity > 10 || slidesItemId?.includes(productId)
                ? cartProduct.product.discountPrice
                : cartProduct.product.currentPrice,
            cartQuantity: cartProduct.cartQuantity,
            startingPrice: cartProduct.product.currentPrice,
            discountPrice: cartProduct.product.discountPrice,
          }));
          dispatch(deleteProductFromCartSuccess(cart));
        })
        .catch((err) => {
          dispatch(deleteProductFromCartError());
          Sentry.captureException(err);
        });
    } else {
      const { cart } = getState().cart;
      const updatedCart = cart.filter((product) => product.id !== productId);
      dispatch(deleteProductFromCartSuccess(updatedCart));
    }
  };

const clearProductsInCart = () => (dispatch) => {
 
  const token = localStorage.getItem("jwt");

  if (token) {
    axios
      .delete(`${API}cart`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then(() => {
        dispatch(clearProductsInCartSuccess());
      })
      .catch((err) => {
        dispatch(clearProductsInCartError());
        Sentry.captureException(err);
      });
  } else {
    dispatch(clearProductsInCartSuccess());
  }
};

export {
  fetchCart,
  addCart,
  addProductToCart,
  decreaseProductQuantity,
  deleteProductFromCart,
  changeProductQuantity,
  changeLocalCart,
  countTotalAmountOrder,
  clearProductsInCart,
};
