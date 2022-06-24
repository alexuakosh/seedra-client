import axios from "axios";
import { API } from "../../app/constants";
import {
  downloadAllSlidesRequested,
  downloadAllSlidesSuccess,
  downloadAllSlidesError,
} from "../actions/slides.actions";

const fetchSlides =
  (uri = `${API}slides`) =>
  (dispatch) => {
    dispatch(downloadAllSlidesRequested());
    axios
      .get(uri)
      .then((products) => {
        dispatch(downloadAllSlidesSuccess(products));
        return products;
      })
      .catch(() => {
        dispatch(downloadAllSlidesError());
      });
  };

export default fetchSlides;
