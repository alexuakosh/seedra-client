import axios from "axios";
import * as Sentry from "@sentry/react";
import { API } from "../../app/constants";
import {
  receivedItemAddToCart,
  requestedItemAddToCart,
  receivedFailureItemAddToCart,
} from "../actions/mainPageCarousel.actions";

export const fetchItemAddToCart = (itemNo) => (dispatch) => {
  dispatch(requestedItemAddToCart());
  axios
    .get(`${API}products/${itemNo}`)
    .then((res) => {
      dispatch(receivedItemAddToCart(res.data));
     
    })
    .catch((err) => {
      dispatch(receivedFailureItemAddToCart(err.message));
      Sentry.captureException(err);
    });
};
