import {
  DOWNLOAD_ALL_PRODUCTS_SUCCESS,
  DOWNLOAD_ALL_PRODUCTS_REQUESTED,
  DOWNLOAD_ALL_PRODUCTS_ERROR,
  DOWNLOAD_FILTERED_PRODUCTS_REQUESTED,
  DOWNLOAD_FILTERED_PRODUCTS_SUCCESS,
  DOWNLOAD_FILTERED_PRODUCTS_ERROR,
  FILTER_BY_CATEGORY,
  ADD_PRODUCT_REQUESTED,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  UPLOAD_PRODUCT_RATING_REQUESTED,
  UPLOAD_PRODUCT_RATING_SUCCESS,
  UPLOAD_PRODUCT_RATING_ERROR,
} from "../actions/products.actions";
import { downloadRequestStates } from "../../app/constants";

const initialState = {
  downloadAllRequestState: downloadRequestStates.IDLE,
  downloadFilteredRequestState: downloadRequestStates.IDLE,
  addProductRequestState: downloadRequestStates.IDLE,
  productList: [],
  selectedCategories: "all",
  filteredProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_ALL_PRODUCTS_REQUESTED:
      return {
        ...state,
        downloadAllRequestState: downloadRequestStates.LOADING,
      };

    case DOWNLOAD_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        downloadAllRequestState: downloadRequestStates.SUCCESS,
        productList: action.payload.data,
      };

    case DOWNLOAD_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        downloadAllRequestState: downloadRequestStates.ERROR,
      };

    case DOWNLOAD_FILTERED_PRODUCTS_REQUESTED:
      return {
        ...state,
        downloadFilteredRequestState: downloadRequestStates.LOADING,
      };

    case DOWNLOAD_FILTERED_PRODUCTS_SUCCESS:
      return {
        ...state,
        downloadFilteredRequestState: downloadRequestStates.SUCCESS,
        filteredProducts: action.payload,
      };

    case DOWNLOAD_FILTERED_PRODUCTS_ERROR:
      return {
        ...state,
        downloadFilteredRequestState: downloadRequestStates.ERROR,
      };

    case FILTER_BY_CATEGORY:
      return {
        ...state,
        selectedCategories: action.payload,
      };

    case ADD_PRODUCT_REQUESTED:
      return {
        ...state,
        addProductRequestState: downloadRequestStates.LOADING,
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProductRequestState: downloadRequestStates.LOADING,
        productList: [...state.productList, action.payload.data],
      };

    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        addProductRequestState: downloadRequestStates.ERROR,
      };

    case UPLOAD_PRODUCT_RATING_REQUESTED:
      return {
        ...state,
        uploadRatingRequestState: downloadRequestStates.LOADING,
      };

    case UPLOAD_PRODUCT_RATING_SUCCESS:
      return {
        ...state,
        uploadRatingRequestState: downloadRequestStates.SUCCESS,
        productList: [
          ...state.productList.filter(
            (product) => product.itemNo !== action.payload.data.itemNo
          ),
          action.payload.data,
        ] /* MVP - added state.product */,
      };

    case UPLOAD_PRODUCT_RATING_ERROR:
      return {
        ...state,
        uploadRatingRequestState: downloadRequestStates.ERROR,
      };

    default:
      return state;
  }
};

export default productsReducer;
