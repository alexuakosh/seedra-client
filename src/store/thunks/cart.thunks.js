import axios from "axios";
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
  clearProductsInCartError
} from "../actions/cart.actions";

const countTotalAmountOrder = () => (dispatch, getState) => {
  const { cart } = getState().cart;
  const sumOrder = cart.reduce((accumulator, currentValue) => (
     accumulator + currentValue.currentPrice * currentValue.cartQuantity
  ), 0);

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

const fetchCart = () => async (dispatch, getState) => {
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
      const cartFromApi = response.data.products.map((cartProduct) => ({
        id: cartProduct.product._id,
        imageUrls: cartProduct.product.imageUrls,
        name: cartProduct.product.name,
        currentPrice: cartProduct.product.currentPrice,
        cartQuantity: cartProduct.cartQuantity,
      }));
      let newCart = [...cartFromApi];
      if (Array.isArray(cart) && cart.length > 0) {
        newCart = concatCarts(cart, cartFromApi);
      }
      const cartForAPI = newCart.map((item) => ({
        product: item.id,
        // imageUrls: item.imageUrls,
        // name: item.name,
        // currentPrice: item.currentPrice,
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
    } catch (error) {
      dispatch(downloadCartError());
    }
  } else {
    dispatch(downloadCartSuccess(cart));
  }
};

const addCart = (cart) => (dispatch) => {
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
        //  --------------------
          // id: cartProduct.product._id,
          // cartQuantity: cartProduct.cartQuantity,
        //   -------------------
        id: cartProduct.product._id,
        imageUrls: cartProduct.product.imageUrls,
        name: cartProduct.product.name,
        currentPrice: cartProduct.product.currentPrice,
        cartQuantity: cartProduct.cartQuantity,
        }));
        dispatch(addCartSuccess(newCart));
      })
      .catch(() => {
        dispatch(addCartError());
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
  imageUrls
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
      currentPrice,
      cartQuantity: calculateCartQuantity(product.cartQuantity),
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
    currentPrice,
    cartQuantity: calculateCartQuantity(),
  };
  const newCart = [...cartCopy, newProduct];
  return newCart;
};

const addProductToCart = (productId) => (dispatch, getState) => {
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
          currentPrice: cartProduct.product.currentPrice,
          cartQuantity: cartProduct.cartQuantity,
        }));
        dispatch(addProductToCartSuccess(cart));
      })
      .catch(() => {
        dispatch(addProductToCartError());
      });
  } else {
    const { cart } = getState().cart;
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === productId
        ? { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 }
        : cartItem
    );
    dispatch(addProductToCartSuccess(updatedCart));
  }
};

const changeProductQuantity =
  (productId, quantity, name, currentPrice, imageUrls) =>
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
        imageUrls
      );
      const cartForAPI = updatedCart.map((item) => ({
        product: item.id,
        imageUrls: item.imageUrls,
        name: item.name,
        currentPrice: item.currentPrice,
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
            currentPrice: cartProduct.product.currentPrice,
            cartQuantity: cartProduct.cartQuantity,
          }));
          dispatch(editSuccess(newCart));
        })
        .catch(() => {
          dispatch(editError());
        });
    } else {
      const calculateQuantity = () => quantity;
      const updatedCart = changeLocalCart(
        cart,
        productId,
        calculateQuantity,
        name,
        currentPrice,
        imageUrls
      );
      dispatch(editSuccess(updatedCart));
    }
  };

const decreaseProductQuantity = (productId) => (dispatch, getState) => {
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
          currentPrice: cartProduct.product.currentPrice,
          cartQuantity: cartProduct.cartQuantity,
        }));
        dispatch(decreaseQuantitySuccess(cart));
      })
      .catch(() => {
        dispatch(decreaseQuantityError());
      });
  } else {
    const { cart } = getState().cart;
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === productId
        ? { ...cartItem, cartQuantity: cartItem.cartQuantity - 1 }
        : cartItem
    );

    dispatch(decreaseQuantitySuccess(updatedCart));
  }
};

const deleteProductFromCart = (productId) => (dispatch, getState) => {
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
          currentPrice: cartProduct.product.currentPrice,
          cartQuantity: cartProduct.cartQuantity,
        }));
        dispatch(deleteProductFromCartSuccess(cart));
      })
      .catch(() => {
        dispatch(deleteProductFromCartError());
      });
  } else {
    const { cart } = getState().cart;
    const updatedCart = cart.filter((product) => product.id !== productId);
    dispatch(deleteProductFromCartSuccess(updatedCart));
  }
};

const  clearProductsInCart = () => (dispatch) => {
  // dispatch(deleteProductFromCartRequest());
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
      .catch(() => {
       dispatch(clearProductsInCartError());
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