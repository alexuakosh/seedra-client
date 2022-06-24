export const DOWNLOAD_ALL_CATEGORIES_REQUESTED = "DOWNLOAD_ALL_CATEGORIES_REQUESTED";
export const downloadAllCategoriesRequested = () => ({
  type: DOWNLOAD_ALL_CATEGORIES_REQUESTED,
});

export const  DOWNLOAD_ALL_CATEGORIES_SUCCESS = "DOWNLOAD_ALL_CATEGORIES_SUCCESS";
export const downloadAllCategoriesSuccess = (products) => ({
  type: DOWNLOAD_ALL_CATEGORIES_SUCCESS,
  payload: products,
});

export const DOWNLOAD_ALL_CATEGORIES_ERROR = "DOWNLOAD_ALL_CATEGORIES_ERROR";
export const downloadAllCategoriesError = () => ({
  type: DOWNLOAD_ALL_CATEGORIES_ERROR,
});