import {
  DOWNLOAD_ALL_SLIDES_REQUESTED,
  DOWNLOAD_ALL_SLIDES_SUCCESS,
  DOWNLOAD_ALL_SLIDES_ERROR,
} from "../actions/slides.actions";
import { downloadRequestStates } from "../../app/constants";

const initialState = {
  downloadRequestState: downloadRequestStates.IDLE,
  slideList: [],
};

const slidesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_ALL_SLIDES_REQUESTED:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.LOADING,
      };

    case DOWNLOAD_ALL_SLIDES_SUCCESS:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.SUCCESS,
        slideList: action.payload.data,
      };

    case DOWNLOAD_ALL_SLIDES_ERROR:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.ERROR,
      };

    default:
      return state;
  }
};

export default slidesReducer;
