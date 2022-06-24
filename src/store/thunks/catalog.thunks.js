import axios from "axios";
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
      .catch(() => {
        dispatch(downloadAllCategoriesError());
      });
  };

export default fetchCategories;
