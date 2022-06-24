import axios from "axios";
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
  isRightPassword,
  getUserDetailsRequested, 
  getUserDetailsSuccess, 
  getUserDetailsError,
  getOrdersSuccess,
  getOrdersError,
} from "../actions/customer.actions";


const addCustomer = (customer) => (dispatch) => {
  dispatch(addCustomerRequested());
  axios
    .post(`${API}customers`, customer)
    .then((savedCustomer) => {
      dispatch(addCustomerSuccess(savedCustomer));
    })
    .catch(() => {
      dispatch(addCustomerError());
    });
}; 



const getUserDetails = () => (dispatch) => {

  dispatch(getUserDetailsRequested()); 
  axios
    .get(`${API}customers/customer`, {
      headers: {
        Authorization: `${localStorage.getItem("jwt")}`, 
      },
    })
    .then((userDetails) => {
        dispatch(getUserDetailsSuccess(userDetails.data.isAdmin));
    })
    .catch(() => {
      dispatch(getUserDetailsError());
    });
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
    .catch(() => {
      dispatch(loginCustomerError());
    });
}; 


const getCustomer = () => (dispatch) => {
  const token = localStorage.getItem("jwt");
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
    .catch(() => {
      dispatch(customerUpdateError());
    });
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
          dispatch(isRightPassword(false));
        } else {
          dispatch(isRightPassword(true));
        }
      })
      .catch(() => console.log("Some error on password change"));
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
    .catch(() => {
      dispatch(customerUpdateError());
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
    .catch(() => {
      dispatch(getOrdersError())
    })

  }

export { addCustomer, loginCustomer, updateCustomer, getCustomer, getUserDetails, getOrders };
