import * as Sentry from "@sentry/react";
import axios from 'axios';
import { API } from '../../app/constants';
import { adminAddProductRequested, 
         adminAddProductError, 
         adminAddProductSuccess, 
         adminDeleteProductRequested, 
         adminDeleteProductError, 
         adminDeleteProductSuccess, 
         adminUpdateProductRequested, 
         adminUpdateProductError, 
         adminUpdateProductSuccess,
         adminAddToSliderRequested, 
         adminAddToSliderSuccess, 
         adminAddToSliderError, 
         adminDelFromSliderRequested, 
         adminDelFromSliderSuccess, 
         adminDelFromSliderError,
         adminUpdateSliderRequested, 
         adminUpdateSliderSuccess, 
         adminUpdateSliderError, } from '../actions/admin.actions';




const adminAddProduct = (product) => (dispatch) => { 

    dispatch(adminAddProductRequested()); 

    const token = localStorage.getItem('jwt');
    if (token) {
      axios
        .post(`${API}products`, product, {
            headers: {
                Authorization: `${token}`,
            },
        })
        .then(() => {
            dispatch(adminAddProductSuccess()); 
        })
        .catch((err) => {
            dispatch(adminAddProductError());
            Sentry.captureException(err);
        });
    }
};  



const adminDeleteProduct = (productID) => (dispatch) => { 

    dispatch(adminDeleteProductRequested()); 

    const token = localStorage.getItem('jwt');
    if (token) {
      axios
        .delete(`${API}products/${productID}`, {
            headers: {
                Authorization: `${token}`,
            },
        })
        .then(() => {
            dispatch(adminDeleteProductSuccess()); 
        })
        .catch((err) => {
            dispatch(adminDeleteProductError());
            Sentry.captureException(err);
        });
    }
}; 



const adminUpdateProduct = (id, product) => (dispatch) => { 

    dispatch(adminUpdateProductRequested()); 

    const token = localStorage.getItem('jwt');
    if (token) {
      axios
        .put(`${API}products/${id}`, product, {
            headers: {
                Authorization: `${token}`,
            },
        })
        .then(() => {
            dispatch(adminUpdateProductSuccess()); 
        })
        .catch((err) => {
            dispatch(adminUpdateProductError());
            Sentry.captureException(err);
        });
    }
}; 



const adminAddProductToSlider = (slide) => (dispatch) => { 

    dispatch(adminAddToSliderRequested()); 

    const token = localStorage.getItem('jwt');
    if (token) {
      axios
        .post(`${API}slides`, slide, {
            headers: {
                Authorization: `${token}`,
            },
        })
        .then(() => {
            dispatch(adminAddToSliderSuccess()); 
        })
        .catch((err) => {
            dispatch(adminAddToSliderError());
            Sentry.captureException(err);
        });
    }
};  



const adminDelProductFromSlider = (slideID) => (dispatch) => { 

    dispatch(adminDelFromSliderRequested()); 

    const token = localStorage.getItem('jwt');
    if (token) {
      axios
        .delete(`${API}slides/${slideID}`, {
            headers: {
                Authorization: `${token}`,
            },
        })
        .then(() => {
            dispatch(adminDelFromSliderSuccess()); 
        })
        .catch((err) => {
            dispatch(adminDelFromSliderError());
            Sentry.captureException(err);
        });
    }
}; 



const adminUpdateSlider = (slide) => (dispatch) => { 

    dispatch(adminUpdateSliderRequested()); 

    const token = localStorage.getItem('jwt');
    if (token) {
      axios
        .put(`${API}slides/${slide.customId}`, slide, {
            headers: {
                Authorization: `${token}`,
            },
        })
        .then(() => {
            dispatch(adminUpdateSliderSuccess()); 
        })
        .catch((err) => {
            dispatch(adminUpdateSliderError());
            Sentry.captureException(err);
        });
    }
}; 


export { adminAddProduct, 
         adminDeleteProduct, 
         adminUpdateProduct, 
         adminAddProductToSlider, 
         adminDelProductFromSlider, 
         adminUpdateSlider, };