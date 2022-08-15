import {
  RECEIVED_ITEM_ADD_TO_CART,
  REQUESTED__ITEM_ADD_TO_CART,
  RECEIVED_FAILURE_ITEM_ADD_TO_CART,
  ITEM_IN_CART,
} from "../actions/mainPageCarousel.actions";

const initialState = {
  openModalWindow: false,
  itemAddToCart: {},
  loading: false,
  
};

const mainPageCarousel = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED__ITEM_ADD_TO_CART:
      return {
        ...state,
        loading: "loading",
      };

    case RECEIVED_ITEM_ADD_TO_CART:
      return {
        itemAddToCart: action.payload,
        loading: "success",
        openModalWindow: true,
        error: null,
      };

    case RECEIVED_FAILURE_ITEM_ADD_TO_CART:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ITEM_IN_CART:
      return {
        itemAddToCart: {},
        loading: false,
        openModalWindow: false,
        error: null,
      };
    default:
      return state;
  }
};

export default mainPageCarousel;
