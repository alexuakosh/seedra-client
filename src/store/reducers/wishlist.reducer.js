import {
  DOWNLOAD_WISHLIST_REQUESTED,
  DOWNLOAD_WISHLIST_SUCCESS,
  DOWNLOAD_WISHLIST_ERROR,
  ADD_WISHLIST_REQUESTED,
  ADD_WISHLIST_SUCCESS,
  ADD_WISHLIST_ERROR,
  PRODUCT_TO_WISHLIST_REQUESTED,
  PRODUCT_TO_WISHLIST_SUCCESS,
  PRODUCT_TO_WISHLIST_ERROR,
} from "../actions/wishlist.actions";
import { downloadRequestStates } from "../../app/constants";

const initialState = {
  downloadWishlistRequestState: downloadRequestStates.IDLE,
  addWishlistRequestState: downloadRequestStates.IDLE,
  addProductToWishlistRequestState: downloadRequestStates.IDLE,
  wishlist: null,
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_WISHLIST_REQUESTED:
      return {
        ...state,
        downloadWishlistRequestState: downloadRequestStates.LOADING,
      };

    case DOWNLOAD_WISHLIST_SUCCESS:
      return {
        ...state,
        downloadWishlistRequestState: downloadRequestStates.SUCCESS,
        wishlist: action.payload,
      };

    case DOWNLOAD_WISHLIST_ERROR:
      return {
        ...state,
        downloadWishlistRequestState: downloadRequestStates.ERROR,
      };

    case ADD_WISHLIST_REQUESTED:
      return {
        ...state,
        addWishlistRequestState: downloadRequestStates.LOADING,
      };

    case ADD_WISHLIST_SUCCESS:
      return {
        ...state,
        addWishlistRequestState: downloadRequestStates.LOADING,
        wishlist: action.payload,
      };

    case ADD_WISHLIST_ERROR:
      return {
        ...state,
        addWishlistRequestState: downloadRequestStates.ERROR,
      };

    case PRODUCT_TO_WISHLIST_REQUESTED:
      return {
        ...state,
        addProductToWishlistRequestState: downloadRequestStates.LOADING,
      };

    case PRODUCT_TO_WISHLIST_SUCCESS:
      return {
        ...state,
        addProductToWishlistRequestState: downloadRequestStates.LOADING,
        wishlist: action.payload,
      };

    case PRODUCT_TO_WISHLIST_ERROR:
      return {
        ...state,
        addProductToWishlistRequestState: downloadRequestStates.ERROR,
      };

    default:
      return state;
  }
};

export default wishlistReducer;
