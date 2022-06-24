export const DOWNLOAD_CART_REQUESTED = "DOWNLOAD_CART_REQUESTED";
export const downloadCartRequested = () => ({
  type: DOWNLOAD_CART_REQUESTED,
});

export const DOWNLOAD_CART_SUCCESS = "DOWNLOAD_CART_SUCCESS";
export const downloadCartSuccess = (cart) => ({
  type: DOWNLOAD_CART_SUCCESS,
  payload: cart,
});

export const DOWNLOAD_CART_ERROR = "DOWNLOAD_CART_ERROR";
export const downloadCartError = () => ({
  type: DOWNLOAD_CART_ERROR,
});

export const ADD_CART_REQUESTED = "ADD_CART_REQUESTED";
export const addCartRequested = () => ({
  type: ADD_CART_REQUESTED,
});

export const ADD_CART_SUCCESS = "ADD_CART_SUCCESS";
export const addCartSuccess = (cart) => ({
  type: ADD_CART_SUCCESS,
  payload: cart,
});

export const ADD_CART_ERROR = "ADD_CART_ERROR";
export const addCartError = () => ({
  type: ADD_CART_ERROR,
});

export const PRODUCT_TO_CART_REQUESTED = "PRODUCT_TO_CART_REQUESTED";
export const addProductToCartRequested = () => ({
  type: PRODUCT_TO_CART_REQUESTED,
});

export const PRODUCT_TO_CART_SUCCESS = "PRODUCT_TO_CART_SUCCESS";
export const addProductToCartSuccess = (cart) => ({
  type: PRODUCT_TO_CART_SUCCESS,
  payload: cart,
});

export const PRODUCT_TO_CART_ERROR = "PRODUCT_TO_CART_ERROR";
export const addProductToCartError = () => ({
  type: PRODUCT_TO_CART_ERROR,
});

export const DECREASE_QUANTITY_REQUESTED = "DECREASE_QUANTITY_REQUESTED";
export const decreaseQuantityRequested = () => ({
  type: DECREASE_QUANTITY_REQUESTED,
});

export const DECREASE_QUANTITY_SUCCESS = "DECREASE_QUANTITY_SUCCESS";
export const decreaseQuantitySuccess = (cart) => ({
  type: DECREASE_QUANTITY_SUCCESS,
  payload: cart,
});

export const DECREASE_QUANTITY_ERROR = "DECREASE_QUANTITY_ERROR";
export const decreaseQuantityError = () => ({
  type: DECREASE_QUANTITY_ERROR,
});

export const DELETE_PRODUCT_FROM_CART_REQUEST =
  "DELETE_PRODUCT_FROM_CART_REQUEST";
export const deleteProductFromCartRequest = () => ({
  type: DELETE_PRODUCT_FROM_CART_REQUEST,
});

export const DELETE_PRODUCT_FROM_CART_SUCCESS =
  "DELETE_PRODUCT_FROM_CART_SUCCESS";
export const deleteProductFromCartSuccess = (cart) => ({
  type: DELETE_PRODUCT_FROM_CART_SUCCESS,
  payload: cart,
});

export const DELETE_PRODUCT_FROM_CART_ERROR = "DELETE_PRODUCT_FROM_CART_ERROR";
export const deleteProductFromCartError = () => ({
  type: DELETE_PRODUCT_FROM_CART_ERROR,
});

export const CART_LOAD_START = "CART_LOAD_START";
export const cartLoadStart = () => ({
  type: CART_LOAD_START,
});

export const CART_LOAD_SUCCESS = "CART_LOAD_SUCCESS";
export const cartLoadSuccess = (cart) => ({
  type: CART_LOAD_SUCCESS,
  payload: cart,
});

export const CART_LOAD_ERROR = "CART_LOAD_ERROR";
export const cartLoadError = () => ({
  type: CART_LOAD_ERROR,
});

export const EDIT_START = "EDIT_START";
export const editStart = () => ({
  type: EDIT_START,
});

export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const editSuccess = (cart) => ({
  type: EDIT_SUCCESS,
  payload: cart,
});

export const EDIT_ERROR = "EDIT_ERROR";
export const editError = () => ({
  type: EDIT_ERROR,
});

export const ORDER_AMOUNT_UPDATED = "ORDER_AMOUNT_UPDATED";
export const orderAmountUpdated = (totalSum) => ({
  type: ORDER_AMOUNT_UPDATED,
  payload: totalSum,
});

export const EMPTY_SHOPPING_CART = "EMPTY_SHOPPING_CART";
export const clearProductsInCartSuccess = () => ({
  type: EMPTY_SHOPPING_CART,
});

export const EMPTY_SHOPPING_CART_ERROR = "EMPTY_SHOPPING_CART_ERROR";
export const clearProductsInCartError = () => ({
  type: EMPTY_SHOPPING_CART_ERROR,
});
