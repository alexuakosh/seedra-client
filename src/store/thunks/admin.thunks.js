
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
         adminUpdateProductSuccess, } from '../actions/admin.actions';




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
        .catch(() => {
            dispatch(adminAddProductError());
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
        .catch(() => {
            dispatch(adminDeleteProductError());
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
        .catch(() => {
            dispatch(adminUpdateProductError());
        });
    }
}; 


export { adminAddProduct, adminDeleteProduct, adminUpdateProduct };