import {
  SET_QUERY_PARAMS,
  SET_SELECTED_CATEGORY,
  SET_INPUT_VALUE_FROM,
  SET_INPUT_VALUE_TO,
  SET_SLIDER_VALUES,
  SET_ORIGIN_CHECKBOX_STATE,
  SET_MATURATION_CHECKBOX_STATE,
  SET_HAS_MORE_FILTERED_PRODUCTS,
  SET_PRODUCTS_QUANTITY,
} from "../actions/filters.actions";

const initialState = {
  queryParams: {},
  selectedCategory: [],
  inputValueFrom: 0,
  inputValueTo: 30,
  sliderValues: [0, 30],
  originCheckboxState: [],
  maturationCheckboxState: [],
  hasMoreFilteredProducts: true,
  productsQuantity: 0,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY_PARAMS:
      if (action.payload === null) {
        return {
          ...state,
          queryParams: {},
        };
      }
      if (Object.keys(action.payload).length !== 0) {
        return {
          ...state,
          queryParams: action.payload,
        };
      }
      return state;

    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    case SET_INPUT_VALUE_FROM:
      return {
        ...state,
        inputValueFrom: action.payload,
      };

    case SET_INPUT_VALUE_TO:
      return {
        ...state,
        inputValueTo: action.payload,
      };

    case SET_SLIDER_VALUES:
      return {
        ...state,
        sliderValues: action.payload,
      };

    case SET_ORIGIN_CHECKBOX_STATE:
      return {
        ...state,
        originCheckboxState: action.payload,
      };

    case SET_MATURATION_CHECKBOX_STATE:
      return {
        ...state,
        maturationCheckboxState: action.payload,
      };

    case SET_HAS_MORE_FILTERED_PRODUCTS:
      return {
        ...state,
        hasMoreFilteredProducts: action.payload,
      };

    case SET_PRODUCTS_QUANTITY:
      return {
        ...state,
        productsQuantity: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
