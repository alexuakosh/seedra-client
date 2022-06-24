export const RECEIVING_HTML_STATIC_PAGE = "RECEIVING_HTML_STATIC_PAGE";
export const receivingHtmlStaticPage = (responseHtml) => ({
  type: RECEIVING_HTML_STATIC_PAGE,
  payload: responseHtml,
});

export const RECEIVED_HTML_STATIC_PAGE = "RECEIVED_HTML_STATIC_PAGE";
export const receivedHtmlStaticPage = (items) => ({
    type: RECEIVED_HTML_STATIC_PAGE,
    payload: items,
});
  
export const REQUESTED_HTML_STATIC_PAGE = "REQUESTED_HTML_STATIC_PAGE";
export  const requestedHtmlStaticPage = () => ({
    type: REQUESTED_HTML_STATIC_PAGE,
  });

export const RECEIVED_FAILURE_HTML_STATIC_PAGE = "RECEIVED_FAILURE_HTML_STATIC_PAGE";
export  const receivedFailureHtmlStaticPage = (error) => ({
    type: RECEIVED_FAILURE_HTML_STATIC_PAGE,
    payload: {
      error,
    },
});