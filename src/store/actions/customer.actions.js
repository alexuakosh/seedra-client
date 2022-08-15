export const ADD_CUSTOMER_REQUESTED = "ADD_CUSTOMER_REQUESTED";
export const addCustomerRequested = () => ({
  type: ADD_CUSTOMER_REQUESTED,
});

export const ADD_CUSTOMER_SUCCESS = "ADD_CUSTOMER_SUCCESS";
export const addCustomerSuccess = (customer) => ({
  type: ADD_CUSTOMER_SUCCESS,
  payload: customer,
});

export const ADD_CUSTOMER_ERROR = "ADD_CUSTOMER_ERROR";
export const addCustomerError = () => ({
  type: ADD_CUSTOMER_ERROR,
});

export const CLEAN_UP_ADD_CUSTOMER_STATE = "CLEAN_UP_ADD_CUSTOMER_STATE";
export const cleanUpAddCustomerState = () => ({
  type: CLEAN_UP_ADD_CUSTOMER_STATE,
})

export const LOGIN_CUSTOMER_REQUESTED = "LOGIN_CUSTOMER_REQUESTED";
export const loginCustomerRequested = () => ({
  type: LOGIN_CUSTOMER_REQUESTED,
});

export const LOGIN_CUSTOMER_SUCCESS = "LOGIN_CUSTOMER_SUCCESS";
export const loginCustomerSuccess = (loginResult) => ({
  type: LOGIN_CUSTOMER_SUCCESS,
  payload: loginResult,
});

export const LOGIN_CUSTOMER_ERROR = "LOGIN_CUSTOMER_ERROR";
export const loginCustomerError = () => ({
  type: LOGIN_CUSTOMER_ERROR,
});

export const GET_CUSTOMER_REQUEST = "GET_CUSTOMER_REQUEST";
export const getCustomerRequest = () => ({
  type: GET_CUSTOMER_REQUEST,
})

export const GET_CUSTOMER_SUCCESS = "GET_CUSTOMER_SUCCESS";
export const getCustomerSuccess = (currentCustomer) => ({
  type: GET_CUSTOMER_SUCCESS,
  payload: currentCustomer
})

export const GET_CUSTOMER_ERROR = "GET_CUSTOMER_ERROR";
export const getCustomerError = () => ({
  type: GET_CUSTOMER_ERROR,
})

export const UPDATE_CUSTOMER_REQUEST = "UPDATE_CUSTOMER_REQUEST";
export const customerUpdateRequest = () => ({
  type: UPDATE_CUSTOMER_REQUEST,
})

export const UPDATE_CUSTOMER_SUCCESS = "UPDATE_CUSTOMER_SUCCESS";
export const customerUpdateSuccess = (updatedCustomer) => ({
  type: UPDATE_CUSTOMER_SUCCESS,
  payload: updatedCustomer
})

export const GET_ORDERS_REQUEST = "GET_ORDERS_REQUEST";
export const getOrdersRequest = () => ({
  type: GET_ORDERS_REQUEST,
})

export const GET_ORDERS_SUCCESS = "GET_ORDERS_SUCCESS";
export const getOrdersSuccess= (orders) => ({
  type: GET_ORDERS_SUCCESS,
  payload: orders
})

export const GET_ORDERS_ERROR = "GET_ORDERS_ERROR";
export const getOrdersError= () => ({
  type: GET_ORDERS_ERROR,
})

export const UPDATE_CUSTOMER_ERROR = "UPDATE_CUSTOMER_ERROR";
export const customerUpdateError = () => ({
  type: UPDATE_CUSTOMER_ERROR,
})

export const CLEAN_UP_LOGIN_STATE = "CLEAN_UP_LOGIN_STATE";
export const cleanUpLoginState = () => ({
  type: CLEAN_UP_LOGIN_STATE,
})

export const IS_RIGHT_PASSWORD_REQUEST = "IS_RIGHT_PASSWORD_REQUEST";
export const isRightPasswordRequest = () => ({
  type: IS_RIGHT_PASSWORD_REQUEST
})

export const IS_RIGHT_PASSWORD_SUCCESS = "IS_RIGHT_PASSWORD_SUCCESS";
export const isRightPasswordSuccess = (isRight) => ({
  type: IS_RIGHT_PASSWORD_SUCCESS,
  payload: isRight
})

export const IS_RIGHT_PASSWORD_ERROR = "IS_RIGHT_PASSWORD_ERROR";
export const isRightPasswordError = () => ({
  type: IS_RIGHT_PASSWORD_ERROR,
})

export const CLEAN_UP_IS_RIGHT_PASSWORD = "CLEAN_UP_IS_RIGHT_PASSWORD";
export const cleanUpIsRightPassword = () => ({
  type: CLEAN_UP_IS_RIGHT_PASSWORD,
})

export const GET_USERDETAILS_REQUESTED = "GET_USERDETAILS_REQUESTED";
export const getUserDetailsRequested = () => ({
  type: GET_USERDETAILS_REQUESTED,
});

export const GET_USERDETAILS_SUCCESS = "GET_USERDETAILS_SUCCESS";
export const getUserDetailsSuccess = (isAdmin) => ({
  type: GET_USERDETAILS_SUCCESS,
  payload: isAdmin,
});

export const GET_USERDETAILS_ERROR = "GET_USERDETAILS_ERROR";
export const getUserDetailsError = () => ({
  type: GET_USERDETAILS_ERROR,
});