/*eslint-disable*/
import {
  DOWNLOAD_ALL_CATEGORIES_SUCCESS,
  DOWNLOAD_ALL_CATEGORIES_REQUESTED,
  DOWNLOAD_ALL_CATEGORIES_ERROR,
} from "../actions/catalog.actions";
import { downloadRequestStates } from "../../app/constants";

const initialState = {
  downloadRequestState: downloadRequestStates.IDLE,
  categoriesList: [],
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_ALL_CATEGORIES_REQUESTED:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.LOADING,
      };

    case DOWNLOAD_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.SUCCESS,
        categoriesList: action.payload.data,
      };

    case DOWNLOAD_ALL_CATEGORIES_ERROR:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.ERROR,
      };

    default:
      return state;
  }
};

export default catalogReducer;
