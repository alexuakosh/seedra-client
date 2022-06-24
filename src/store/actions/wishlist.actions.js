export const DOWNLOAD_WISHLIST_REQUESTED = "DOWNLOAD_WISHLIST_REQUESTED";
export const downloadWishlistRequested = () => ({
  type: DOWNLOAD_WISHLIST_REQUESTED,
});

export const  DOWNLOAD_WISHLIST_SUCCESS = "DOWNLOAD_WISHLIST_SUCCESS";
export const downloadWishlistSuccess = (wishlist) => ({
  type: DOWNLOAD_WISHLIST_SUCCESS,
  payload: wishlist,
});

export const DOWNLOAD_WISHLIST_ERROR = "DOWNLOAD_WISHLIST_ERROR";
export const downloadWishlistError = () => ({
  type: DOWNLOAD_WISHLIST_ERROR,
});

export const ADD_WISHLIST_REQUESTED = "ADD_WISHLIST_REQUESTED";
export const addWishlistRequested = () => ({
  type: ADD_WISHLIST_REQUESTED,
});

export const  ADD_WISHLIST_SUCCESS = "ADD_WISHLIST_SUCCESS";
export const addWishlistSuccess = (wishlist) => ({
  type: ADD_WISHLIST_SUCCESS,
  payload: wishlist,
});

export const ADD_WISHLIST_ERROR = "ADD_WISHLIST_ERROR";
export const addWishlistError = () => ({
  type: ADD_WISHLIST_ERROR,
});

export const PRODUCT_TO_WISHLIST_REQUESTED = "PRODUCT_TO_WISHLIST_REQUESTED";
export const addProductToWishlistRequested = () => ({
  type: PRODUCT_TO_WISHLIST_REQUESTED,
});

export const  PRODUCT_TO_WISHLIST_SUCCESS = "PRODUCT_TO_WISHLIST_SUCCESS";
export const addProductToWishlistSuccess = (product) => ({
  type: PRODUCT_TO_WISHLIST_SUCCESS,
  payload: product,
});

export const PRODUCT_TO_WISHLIST_ERROR = "PRODUCT_TO_WISHLIST_ERROR";
export const addProductToWishlistError = () => ({
  type: PRODUCT_TO_WISHLIST_ERROR,
});