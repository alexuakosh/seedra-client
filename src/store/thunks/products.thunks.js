import axios from "axios";
import * as Sentry from "@sentry/react";
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
  downloadProductByIdSuccess,
  downloadProductByIdRequested,
  downloadProductByIdError,
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
      .catch((err) => {
        dispatch(downloadAllProductsError());
        dispatch(downloadFilteredProductsError());
        Sentry.captureException(err);
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
    .catch((err) => {
      dispatch(downloadFilteredProductsError());
      Sentry.captureException(err);
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
    .catch((err) => {
      dispatch(addProductError());
      Sentry.captureException(err);
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
    .catch((err) => {
      dispatch(uploadProductRatingError());
      Sentry.captureException(err);
    });
};

const filterProductsByCategory = (category) => (dispatch) => {
  dispatch(filterByCategory(category));
};

const fetchProductById = (id) => (dispatch) => {
  dispatch(downloadProductByIdRequested());

  axios
    .get(`${API}products/${id}`)
    .then((product) => {
      dispatch(downloadProductByIdSuccess(product));
      return product;
    })
    .catch((err) => {
      dispatch(downloadProductByIdError());
      Sentry.captureException(err);
    });
};

export {
  filterProductsByCategory,
  fetchProducts,
  fetchFilteredProducts,
  addProduct,
  rateProduct,
  fetchProductById,
};
