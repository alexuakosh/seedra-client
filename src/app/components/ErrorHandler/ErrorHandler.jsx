import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ErrorHandler = ({ errorMessage }) => {
  const [error, setError] = useState(errorMessage);

  useEffect(() => {
    setError(null);
  }, []);

  const errorMes = `NETWORK ERROR: ${errorMessage}`;

  if (error !== null) {
    toast.error(errorMes, {
      theme: "colored",
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
    });
  }

  return <ToastContainer />;
};

ErrorHandler.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorHandler;
