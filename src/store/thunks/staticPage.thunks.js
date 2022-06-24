import axios from "axios";
import {
  receivedHtmlStaticPage,
  requestedHtmlStaticPage,
  receivedFailureHtmlStaticPage,
} from "../actions/staticPage.actions";
import { API } from "../../app/constants";

export const fetchStaticPage = (page) => (dispatch) => {
  dispatch(requestedHtmlStaticPage());
  axios
    .get(`${API}pages/${page}`)
    .then((res) => {
      setTimeout(() => {
        dispatch(receivedHtmlStaticPage(res.data));
      }, 200);
      throw new Error("received error!");
    })
    .catch((err) => {
      dispatch(receivedFailureHtmlStaticPage(err.message));
    });
};
