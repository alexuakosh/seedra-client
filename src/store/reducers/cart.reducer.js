import {
  DOWNLOAD_CART_REQUESTED,
  DOWNLOAD_CART_SUCCESS,
  DOWNLOAD_CART_ERROR,
  ADD_CART_REQUESTED,
  ADD_CART_SUCCESS,
  ADD_CART_ERROR,
  PRODUCT_TO_CART_REQUESTED,
  PRODUCT_TO_CART_SUCCESS,
  PRODUCT_TO_CART_ERROR,
  EDIT_START,
  EDIT_SUCCESS,
  EDIT_ERROR,
  DECREASE_QUANTITY_REQUESTED,
  DECREASE_QUANTITY_SUCCESS,
  DECREASE_QUANTITY_ERROR,
  DELETE_PRODUCT_FROM_CART_REQUEST,
  DELETE_PRODUCT_FROM_CART_SUCCESS,
  DELETE_PRODUCT_FROM_CART_ERROR,
  ORDER_AMOUNT_UPDATED,
  EMPTY_SHOPPING_CART,
  EMPTY_SHOPPING_CART_ERROR,
} from "../actions/cart.actions";
import { downloadRequestStates } from "../../app/constants";

const initialState = {
  downloadRequestState: downloadRequestStates.IDLE,
  addCartRequestState: downloadRequestStates.IDLE,
  addProductToCartRequestState: downloadRequestStates.IDLE,
  editCartState: downloadRequestStates.IDLE,
  decreaseQuantityState: downloadRequestStates.IDLE,
  deleteProductFromCartState: downloadRequestStates.IDLE,
  clearShoppingCartState: "IDLE",
  cart: [],
  totalSum: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_CART_REQUESTED:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.LOADING,
      };

    case DOWNLOAD_CART_SUCCESS:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.SUCCESS,
        clearShoppingCartState: "IDLE",
        cart: action.payload,
      };

    case DOWNLOAD_CART_ERROR:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.ERROR,
      };

    case ADD_CART_REQUESTED:
      return {
        ...state,
        addCartRequestState: downloadRequestStates.LOADING,
      };

    case ADD_CART_SUCCESS:
      return {
        ...state,
        addCartRequestState: downloadRequestStates.SUCCESS,
        clearShoppingCartState: "IDLE",
        cart: action.payload,
      };

    case ADD_CART_ERROR:
      return {
        ...state,
        addCartRequestState: downloadRequestStates.ERROR,
      };

    case PRODUCT_TO_CART_REQUESTED:
      return {
        ...state,
        addProductToCartRequestState: downloadRequestStates.LOADING,
      };

    case PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        addProductToCartRequestState: downloadRequestStates.SUCCESS,
        clearShoppingCartState: "IDLE",
        cart: action.payload,
      };

    case PRODUCT_TO_CART_ERROR:
      return {
        ...state,
        addProductToCartRequestState: downloadRequestStates.ERROR,
      };

    case EDIT_START:
      return {
        ...state,
        editCartState: downloadRequestStates.LOADING,
      };

    case EDIT_SUCCESS:
      return {
        ...state,
        editCartState: downloadRequestStates.SUCCESS,
        cart: action.payload,
      };

    case EDIT_ERROR:
      return {
        ...state,
        editCartState: downloadRequestStates.ERROR,
      };

    case DECREASE_QUANTITY_REQUESTED:
      return {
        ...state,
        decreaseQuantityState: downloadRequestStates.LOADING,
      };

    case DECREASE_QUANTITY_SUCCESS:
      return {
        ...state,
        decreaseQuantityState: downloadRequestStates.SUCCESS,
        cart: action.payload,
      };

    case DECREASE_QUANTITY_ERROR:
      return {
        ...state,
        decreaseQuantityState: downloadRequestStates.ERROR,
      };

    case DELETE_PRODUCT_FROM_CART_REQUEST:
      return {
        ...state,
        deleteProductFromCartState: downloadRequestStates.LOADING,
      };

    case DELETE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        deleteProductFromCartState: downloadRequestStates.SUCCESS,
        clearShoppingCartState: "IDLE",
        cart: action.payload,
      };

    case DELETE_PRODUCT_FROM_CART_ERROR:
      return {
        ...state,
        deleteProductFromCartState: downloadRequestStates.ERROR,
      };

    case ORDER_AMOUNT_UPDATED:
      return {
        ...state,
          totalSum: action.payload,
        };

    case EMPTY_SHOPPING_CART:
        return {
        ...state,
        cart: [],
        clearShoppingCartState: downloadRequestStates.SUCCESS,
        };

    case EMPTY_SHOPPING_CART_ERROR:
        return {
        ...state,
        cart: [],
        clearShoppingCartState: downloadRequestStates.ERROR,
        };
  

    default:
      return state;
  }
};

export default cartReducer;
