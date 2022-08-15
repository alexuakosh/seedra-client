import axios from "axios";
import * as Sentry from "@sentry/react";
import { API } from "../../app/constants";
import {
  addCustomerRequested,
  addCustomerSuccess,
  addCustomerError,
  loginCustomerRequested,
  loginCustomerSuccess,
  loginCustomerError,
  customerUpdateError,
  getCustomerRequest,
  customerUpdateRequest,
  getCustomerSuccess,
  customerUpdateSuccess,
  getUserDetailsRequested, 
  getUserDetailsSuccess, 
  getUserDetailsError,
  getOrdersSuccess,
  getOrdersError,
  isRightPasswordError,
  isRightPasswordSuccess,
} from "../actions/customer.actions";


const addCustomer = (customer) => (dispatch) => {
  dispatch(addCustomerRequested());
  axios
    .post(`${API}customers`, customer)
    .then((savedCustomer) => {
      dispatch(addCustomerSuccess(savedCustomer));
    })
    .catch((err) => {
      dispatch(addCustomerError());
      Sentry.captureException(err);
    });
}; 



const getUserDetails = () => (dispatch) => {

  const token = localStorage.getItem("jwt"); 

  if (token) {
  dispatch(getUserDetailsRequested());  

  axios
      .get(`${API}customers/customer`, {
        headers: {
          Authorization: `${token}`, 
        },
      })
      .then((userDetails) => {
          dispatch(getUserDetailsSuccess(userDetails.data.isAdmin));
      })
      .catch((err) => {
        dispatch(getUserDetailsError());
        Sentry.captureException(err);
      });
  }
};



const loginCustomer = (userData) => (dispatch) => {
  dispatch(loginCustomerRequested());
  axios
    .post(`${API}customers/login`, userData)
    .then((loginResult) => {
      localStorage.setItem("jwt", loginResult.data.token);
      dispatch(loginCustomerSuccess(loginResult));
      dispatch(getUserDetails());      
    })
    .catch((err) => {
      dispatch(loginCustomerError());
      Sentry.captureException(err);
    });
}; 


const getCustomer = () => (dispatch) => {
  const token = localStorage.getItem("jwt");

  if (token) {
  dispatch(getCustomerRequest()); 
  
  axios
      .get(`${API}customers/customer`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((currentCustomer) => {
        dispatch(getCustomerSuccess(currentCustomer.data));
      })
      .catch((err) => {
        dispatch(customerUpdateError());
        Sentry.captureException(err);
      });
  }
};

const updateCustomer = (modifiedCustomer) => (dispatch) => {
  const token = localStorage.getItem("jwt");

  dispatch(customerUpdateRequest());
  if (modifiedCustomer.password !== "" && modifiedCustomer.newPassword !== "") {
    axios
      .put(
        `${API}customers/password`,
        {
          password: modifiedCustomer.password,
          newPassword: modifiedCustomer.newPassword,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((updatedPassword) => {
        if (updatedPassword.data.password === "Password does not match") {
          dispatch(isRightPasswordError());
        } else {
          dispatch(isRightPasswordSuccess());
        }
      })
      .catch((err) => Sentry.captureException(err));
  }

  const customerToPut = { ...modifiedCustomer };
  delete customerToPut.password;
  delete customerToPut.newPassword;

  axios
    .put(`${API}customers`, customerToPut, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((updatedCustomer) => {
      dispatch(customerUpdateSuccess(updatedCustomer));
    })
    .catch((err) => {
      dispatch(customerUpdateError());
      Sentry.captureException(err);
    });
};

const getOrders = () => (dispatch) =>  {
  const token = localStorage.getItem("jwt");
  
   axios
    .get(`${API}orders`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((orders) => {
      dispatch(getOrdersSuccess(orders.data));
    })
    .catch((err) => {
      dispatch(getOrdersError())
      Sentry.captureException(err);
    })

  }

export { addCustomer, loginCustomer, updateCustomer, getCustomer, getUserDetails, getOrders };
