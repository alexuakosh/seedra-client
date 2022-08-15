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