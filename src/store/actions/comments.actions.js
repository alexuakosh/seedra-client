export const DOWNLOAD_ALL_COMMENTS_REQUESTED = "DOWNLOAD_ALL_COMMENTS_REQUESTED";
export const downloadAllCommentsRequested = () => ({
  type: DOWNLOAD_ALL_COMMENTS_REQUESTED,
});
export const  DOWNLOAD_ALL_COMMENTS_SUCCESS = "DOWNLOAD_ALL_COMMENTS_SUCCESS";
export const downloadAllCommentsSuccess = (comments) => ({
  type: DOWNLOAD_ALL_COMMENTS_SUCCESS,
  payload: comments,
});
export const DOWNLOAD_ALL_COMMENTS_ERROR = "DOWNLOAD_ALL_COMMENTS_ERROR";
export const downloadAllCommentsError = () => ({
  type: DOWNLOAD_ALL_COMMENTS_ERROR,
});



export const ADD_COMMENT_REQUESTED = "ADD_COMMENT_REQUESTED";
export const addCommentRequested = () => ({
  type: ADD_COMMENT_REQUESTED,
});
export const  ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const addCommentSuccess = (comments) => ({
  type: ADD_COMMENT_SUCCESS,
  payload: comments,
});
export const ADD_COMMENT_ERROR = "ADD_COMMENT_ERROR";
export const addCommentError = () => ({
  type: ADD_COMMENT_ERROR,
});


export const DOWNLOAD_PRODUCT_COMMENTS_REQUESTED = "DOWNLOAD_PRODUCT_COMMENTS_REQUESTED";
export const downloadProductCommentsRequested = () => ({
  type: DOWNLOAD_PRODUCT_COMMENTS_REQUESTED,
});
export const  DOWNLOAD_PRODUCT_COMMENTS_SUCCESS = "DOWNLOAD_PRODUCT_COMMENTS_SUCCESS";
export const downloadProductCommentsSuccess = (comments) => ({
  type: DOWNLOAD_PRODUCT_COMMENTS_SUCCESS,
  payload: comments,
});
export const DOWNLOAD_PRODUCT_COMMENTS_ERROR = "DOWNLOAD_PRODUCT_COMMENTS_ERROR";
export const downloadProductCommentsError = () => ({
  type: DOWNLOAD_PRODUCT_COMMENTS_ERROR,
});


export const EDIT_PRODUCT_COMMENT_REQUESTED = "EDIT_PRODUCT_COMMENT_REQUESTED";
export const editProductCommentsRequested = () => ({
  type: EDIT_PRODUCT_COMMENT_REQUESTED,
});
export const  EDIT_PRODUCT_COMMENT_SUCCESS = "EDIT_PRODUCT_COMMENT_SUCCESS";
export const editProductCommentsSuccess = (comment) => ({
  type: EDIT_PRODUCT_COMMENT_SUCCESS,
  payload: comment,
});
export const EDIT_PRODUCT_COMMENT_ERROR = "EDIT_PRODUCT_COMMENT_ERROR";
export const editProductCommentsError = () => ({
  type: EDIT_PRODUCT_COMMENT_ERROR,
});



// export const DOWNLOAD_FILTERED_PRODUCTS_REQUESTED = "DOWNLOAD_FILTERED_PRODUCTS_REQUESTED";
// export const downloadFilteredProductsRequested = () => ({
//   type: DOWNLOAD_FILTERED_PRODUCTS_REQUESTED,
// });

// export const  DOWNLOAD_FILTERED_PRODUCTS_SUCCESS = "DOWNLOAD_FILTERED_PRODUCTS_SUCCESS";
// export const downloadFilteredProductsSuccess = (products) => ({
//   type: DOWNLOAD_FILTERED_PRODUCTS_SUCCESS,
//   payload: products,
// });

// export const DOWNLOAD_FILTERED_PRODUCTS_ERROR = "DOWNLOAD_FILTERED_PRODUCTS_ERROR";
// export const downloadFilteredProductsError = () => ({
//   type: DOWNLOAD_FILTERED_PRODUCTS_ERROR,
// });

// export const FILTER_BY_CATEGORY = "FILTER_PRODUCTS_BY_CATEGORY";
// export const filterByCategory = (category) => ({
//   type: FILTER_BY_CATEGORY,
//   payload: category,
// });

// export const UPLOAD_PRODUCT_RATING_REQUESTED = "UPLOAD_PRODUCT_RATING_REQUESTED";
// export const uploadProductRatingRequested = () => ({
//   type: UPLOAD_PRODUCT_RATING_REQUESTED,
// });

// export const UPLOAD_PRODUCT_RATING_SUCCESS = "UPLOAD_PRODUCT_RATING_SUCCESS";
// export const uploadProductRatingSuccess = (product) => ({
//   type: UPLOAD_PRODUCT_RATING_SUCCESS,
//   payload: product,
// });

// export const UPLOAD_PRODUCT_RATING_ERROR = "UPLOAD_PRODUCT_RATING_ERROR";
// export const uploadProductRatingError = () => ({
//   type: UPLOAD_PRODUCT_RATING_ERROR,
// });
