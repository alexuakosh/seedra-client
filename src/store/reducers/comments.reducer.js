import {
    DOWNLOAD_ALL_COMMENTS_SUCCESS,
    DOWNLOAD_ALL_COMMENTS_REQUESTED,
    DOWNLOAD_ALL_COMMENTS_ERROR,
    ADD_COMMENT_REQUESTED,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_ERROR,
    DOWNLOAD_PRODUCT_COMMENTS_REQUESTED,
    DOWNLOAD_PRODUCT_COMMENTS_ERROR,
    DOWNLOAD_PRODUCT_COMMENTS_SUCCESS,
    EDIT_PRODUCT_COMMENT_REQUESTED,
    EDIT_PRODUCT_COMMENT_SUCCESS,
    EDIT_PRODUCT_COMMENT_ERROR,
  } from "../actions/comments.actions";
  import { downloadRequestStates } from "../../app/constants";
  
  const initialState = {
    downloadAllCommentsRequestState: downloadRequestStates.IDLE,
    comments: [],

    addCommentRequestState: downloadRequestStates.IDLE,

    downloadProductCommentsRequestState: downloadRequestStates.IDLE,
    productComments: [],

    editCommentRequestState: downloadRequestStates.IDLE,
    editedComent: {},
  };
  
  const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case DOWNLOAD_ALL_COMMENTS_REQUESTED:
        return {
          ...state,
          downloadAllCommentsRequestState: downloadRequestStates.LOADING,
        };
  
      case DOWNLOAD_ALL_COMMENTS_SUCCESS:
        return {
          ...state,
          downloadAllCommentsRequestState: downloadRequestStates.SUCCESS,
          comments: action.payload,
        };
  
      case DOWNLOAD_ALL_COMMENTS_ERROR:
        return {
          ...state,
          downloadAllCommentsRequestState: downloadRequestStates.ERROR,
        };

      case ADD_COMMENT_REQUESTED:
        return {
          ...state,
          addCommentRequestState: downloadRequestStates.LOADING,
        };
  
      case ADD_COMMENT_SUCCESS:
        return {
          ...state,
          addCommentRequestState: downloadRequestStates.SUCCESS,
          editedComent: action.payload.data,
          comments: [...state.comments, action.payload.data],
          productComments: [...state.productComments, action.payload.data]
        };
  
      case ADD_COMMENT_ERROR:
        return {
          ...state,
          addCommentRequestState: downloadRequestStates.ERROR,
        };


      case DOWNLOAD_PRODUCT_COMMENTS_REQUESTED:
        return {
          ...state,
          downloadProductCommentsRequestState: downloadRequestStates.LOADING,
        };
  
      case DOWNLOAD_PRODUCT_COMMENTS_SUCCESS:
        return {
          ...state,
          downloadProductCommentsRequestState: downloadRequestStates.SUCCESS,
          productComments: action.payload,
          comments: [...state.comments.filter(comment => comment.product._id !== action.payload[0].product._id), ...action.payload],
        };
  
      case DOWNLOAD_PRODUCT_COMMENTS_ERROR:
        return {
          ...state,
          downloadProductCommentsRequestState: downloadRequestStates.ERROR,
        };

      case EDIT_PRODUCT_COMMENT_REQUESTED:
        return {
          ...state,
          editCommentRequestState: downloadRequestStates.LOADING,
        };
  
      case EDIT_PRODUCT_COMMENT_SUCCESS:
        return {
          ...state,
          editCommentRequestState: downloadRequestStates.SUCCESS,
          comments: [...state.comments.filter(comment => comment._id !== action.payload.data._id), action.payload.data],
          productComments: [...state.productComments.filter(comment => comment._id !== action.payload.data._id), action.payload.data]
        };
      case EDIT_PRODUCT_COMMENT_ERROR:
        return {
          ...state,
          editCommentRequestState: downloadRequestStates.ERROR,
        };
      default:
        return state;
    }
  };
  
  export default commentsReducer;
  