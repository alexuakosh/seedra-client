import axios from "axios";
import * as Sentry from "@sentry/react";
import { API } from "../../app/constants";
import {
  downloadAllCategoriesRequested,
  downloadAllCategoriesSuccess,
  downloadAllCategoriesError,
} from "../actions/catalog.actions";

const fetchCategories =
  (uri = `${API}catalog`) =>
  (dispatch) => {
    dispatch(downloadAllCategoriesRequested());
    axios
      .get(uri)
      .then((categories) => {
        dispatch(downloadAllCategoriesSuccess(categories));
        return categories;
      })
      .catch((err) => {
        dispatch(downloadAllCategoriesError());
        Sentry.captureException(err);
      });
  };

export default fetchCategories;
