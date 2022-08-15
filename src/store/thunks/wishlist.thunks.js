import axios from "axios";
import * as Sentry from "@sentry/react";
import { API } from "../../app/constants";
import {
  downloadWishlistRequested,
  downloadWishlistSuccess,
  downloadWishlistError,
  addWishlistRequested,
  addWishlistSuccess,
  addWishlistError,
  addProductToWishlistRequested,
  addProductToWishlistSuccess,
  addProductToWishlistError,
} from "../actions/wishlist.actions";

const fetchWishlist =
  (uri = `${API}wishlist`) =>
  (dispatch) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      dispatch(downloadWishlistRequested());
      axios
        .get(uri, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((wishlist) => {
          dispatch(downloadWishlistSuccess(wishlist.data));
          return wishlist;
        })
        .catch((err) => {
          dispatch(downloadWishlistError());
          Sentry.captureException(err);
        });
    }
  };

const addWishlist = (wishlist) => (dispatch) => {
  dispatch(addWishlistRequested());
  const token = localStorage.getItem("jwt");
  if (token) {
    axios
      .post(`${API}wishlist`, wishlist, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((addedWishlist) => {
        dispatch(addWishlistSuccess(addedWishlist.data));
        return addedWishlist;
      })
      .catch((err) => {
        dispatch(addWishlistError());
        Sentry.captureException(err);
      });
  }
};

const addProductToWishlist = (productId) => (dispatch) => {
  dispatch(addProductToWishlistRequested());
  const token = localStorage.getItem("jwt");

  if (token) {
    axios
      .put(`${API}wishlist/${productId}`, false, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((updatedWishlist) => {
        dispatch(addProductToWishlistSuccess(updatedWishlist.data));
        return updatedWishlist;
      })
      .catch((err) => {
        dispatch(addProductToWishlistError());
        Sentry.captureException(err);
      });
  }
};

const deleteProductFromWishlist = (productId) => (dispatch) => {
  dispatch(addProductToWishlistRequested());
  const token = localStorage.getItem("jwt");

  if (token) {
    axios
      .delete(`${API}wishlist/${productId}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((updatedWishlist) => {
        dispatch(addProductToWishlistSuccess(updatedWishlist.data));
        return updatedWishlist;
      })
      .catch((err) => {
        dispatch(addProductToWishlistError());
        Sentry.captureException(err);
      });
  }
};

export { fetchWishlist, addWishlist, deleteProductFromWishlist, addProductToWishlist };
