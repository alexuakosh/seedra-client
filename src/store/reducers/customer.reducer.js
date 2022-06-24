import {
  ADD_CUSTOMER_REQUESTED,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_ERROR,
  LOGIN_CUSTOMER_REQUESTED,
  LOGIN_CUSTOMER_SUCCESS,
  LOGIN_CUSTOMER_ERROR,
  GET_CUSTOMER_ERROR,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_ERROR,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_REQUEST,
  CLEAN_UP_LOGIN_STATE,
  IS_RIGHT_PASSWORD, 
  GET_USERDETAILS_REQUESTED, 
  GET_USERDETAILS_SUCCESS, 
  GET_USERDETAILS_ERROR,
  GET_ORDERS_REQUEST,
  GET_ORDERS_ERROR,
  GET_ORDERS_SUCCESS
} from "../actions/customer.actions";
import { downloadRequestStates } from "../../app/constants";

const initialState = {
  addRequestState: downloadRequestStates.IDLE,
  newCustomer: null,
  loginRequestState: downloadRequestStates.IDLE,
  currentCustomer: null,
  updatedCustomer: null,
  getCurrentCustomerRequestState: downloadRequestStates.IDLE,
  updateCustomerRequestState: downloadRequestStates.IDLE,
  isRightPassword: null,
  isLoggedIn: Boolean(localStorage.getItem('jwt')), 
  getUserDetailsRequestState: downloadRequestStates.IDLE,
  isAdmin: false, 
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER_REQUESTED:
      return {
        ...state,
        addRequestState: downloadRequestStates.LOADING,
      };

    case ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        addRequestState: downloadRequestStates.SUCCESS,
        newCustomer: action.payload.data,
      };

    case ADD_CUSTOMER_ERROR:
      return {
        ...state,
        addRequestState: downloadRequestStates.ERROR,
      };

    case LOGIN_CUSTOMER_REQUESTED:
      return {
        ...state,
        loginRequestState: downloadRequestStates.LOADING,
      };

    case LOGIN_CUSTOMER_SUCCESS:
      return {
        ...state,
        loginRequestState: downloadRequestStates.SUCCESS,
        isLoggedIn: action.payload.data.success,
      };

    case LOGIN_CUSTOMER_ERROR:
      return {
        ...state,
        loginRequestState: downloadRequestStates.ERROR,
      };


    case GET_CUSTOMER_REQUEST:
      return {
        ...state,
        getCurrentCustomerRequestState: downloadRequestStates.LOADING,
      };

    case GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        getCurrentCustomerRequestState: downloadRequestStates.SUCCESS,
        currentCustomer: action.payload,
      };
    case GET_CUSTOMER_ERROR:
      return {
        ...state,
        getCurrentCustomerRequestState: downloadRequestStates.ERROR,
      };
    case UPDATE_CUSTOMER_REQUEST:
      return {
        ...state,
        updateCustomerRequestState: downloadRequestStates.LOADING,
      };
    case UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        updateCustomerRequestState: downloadRequestStates.SUCCESS,
        updatedCustomer: action.payload,
      };
    case UPDATE_CUSTOMER_ERROR:
      return {
        ...state,
        updateCustomerRequestState: downloadRequestStates.ERROR,
      };

    case CLEAN_UP_LOGIN_STATE:
      return {
        ...state,
        loginRequestState: downloadRequestStates.IDLE,
      };

    case IS_RIGHT_PASSWORD:
      return {
        ...state,
        isRightPassword: action.payload,
      };

    case GET_USERDETAILS_REQUESTED:
      return {
        ...state,
        getUserDetailsRequestState: downloadRequestStates.LOADING,
      };

    case GET_USERDETAILS_SUCCESS:
      return {
        ...state,
        getUserDetailsRequestState: downloadRequestStates.SUCCESS,
        isAdmin: action.payload,
      };

    case GET_USERDETAILS_ERROR:
      return {
        ...state,
        getUserDetailsRequestState: downloadRequestStates.ERROR,

      };
    
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        getOrdersRequestState: downloadRequestStates.LOADING,
      };

    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        getOrdersRequestState: downloadRequestStates.SUCCESS,
        getOrders:action.payload
      };

    case GET_ORDERS_ERROR:
      return {
        ...state,
        getOrdersRequestState: downloadRequestStates.ERROR,
      };
  

    default:
      return state;
  }
};

export default customerReducer;
