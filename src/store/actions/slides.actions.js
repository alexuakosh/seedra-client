export const DOWNLOAD_ALL_SLIDES_REQUESTED = "DOWNLOAD_ALL_SLIDES_REQUESTED";
export const downloadAllSlidesRequested = () => ({
  type: DOWNLOAD_ALL_SLIDES_REQUESTED,
});

export const  DOWNLOAD_ALL_SLIDES_SUCCESS = "DOWNLOAD_ALL_SLIDES_SUCCESS";
export const downloadAllSlidesSuccess = (products) => ({
  type: DOWNLOAD_ALL_SLIDES_SUCCESS,
  payload: products,
});

export const DOWNLOAD_ALL_SLIDES_ERROR = "DOWNLOAD_ALL_SLIDES_ERROR";
export const downloadAllSlidesError = () => ({
  type: DOWNLOAD_ALL_SLIDES_ERROR,
});
