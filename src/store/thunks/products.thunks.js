import axios from "axios";
import { API } from "../../app/constants";
import { setProductsQuantity } from "../actions/filters.actions";
import {
  downloadAllProductsRequested,
  downloadAllProductsSuccess,
  downloadAllProductsError,
  filterByCategory,
  addProductRequested,
  addProductSuccess,
  addProductError,
  downloadFilteredProductsRequested,
  downloadFilteredProductsSuccess,
  downloadFilteredProductsError,
  uploadProductRatingRequested,
  uploadProductRatingError,
  uploadProductRatingSuccess,
} from "../actions/products.actions";

const fetchProducts =
  (uri = `${API}`) =>
  (dispatch) => {
    dispatch(downloadAllProductsRequested());
    dispatch(downloadFilteredProductsRequested());
    axios
      .get(uri)
      .then((products) => {
        dispatch(downloadAllProductsSuccess(products.data.products));
        dispatch(downloadFilteredProductsSuccess(products.data.products));
        return products;
      })
      .catch(() => {
        dispatch(downloadAllProductsError());
        dispatch(downloadFilteredProductsError());
      });
  };

const fetchFilteredProducts = (queryParams) => (dispatch) => {
  dispatch(downloadFilteredProductsRequested());
  const URLParams = new URLSearchParams(queryParams);

  axios
    .get(`${API}products/filter?${URLParams}`)
    .then((filteredProducts) => {
      dispatch(downloadFilteredProductsSuccess(filteredProducts.data.products));

      if (Object.keys(queryParams).length === 3) {
        dispatch(setProductsQuantity(filteredProducts.data.productsQuantity));
      }

      return filteredProducts;
    })
    .catch(() => {
      dispatch(downloadFilteredProductsError());
    });
};

const addProduct = (product) => (dispatch) => {
  dispatch(addProductRequested());
  const token = localStorage.getItem("jwt");
  axios
    .post(`${API}products`, product, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((addedProduct) => {
      dispatch(addProductSuccess(addedProduct));
      return addedProduct;
    })
    .catch(() => {
      dispatch(addProductError());
    });
};

const rateProduct = (id, updatedProduct) => (dispatch) => {
  dispatch(uploadProductRatingRequested());
  axios
    .put(`${API}/products/${id}`, updatedProduct, {
      headers: { Authorization: localStorage.getItem("jwt") },
    })
    .then((product) => {
      dispatch(uploadProductRatingSuccess(product));
      return product;
    })
    .catch(() => {
      dispatch(uploadProductRatingError());
    });
};

const filterProductsByCategory = (category) => (dispatch) => {
  dispatch(filterByCategory(category));
};

export {
  filterProductsByCategory,
  fetchProducts,
  fetchFilteredProducts,
  addProduct,
  rateProduct,
};
