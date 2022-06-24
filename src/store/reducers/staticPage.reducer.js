import {
  RECEIVED_HTML_STATIC_PAGE,
  REQUESTED_HTML_STATIC_PAGE,
  RECEIVED_FAILURE_HTML_STATIC_PAGE,
} from "../actions/staticPage.actions";

const initialState = {
  customId: {},
  loading: false,
};

const staticPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_HTML_STATIC_PAGE:
      return {
        ...state,
        loading: false,
      };

    case RECEIVED_HTML_STATIC_PAGE:
      return {
        customId: action.payload,
        loading: true,
        error: null,
      };

    case RECEIVED_FAILURE_HTML_STATIC_PAGE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default staticPageReducer;
