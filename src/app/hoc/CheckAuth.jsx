// import { useLocation,Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
// import LogIn from "../components/Forms/LogRegModal.jsx";

const CheckAuth = ({children}) => {
    const auth = localStorage.getItem("jwt")
    return auth ? <> <Navigate to='/'/> </> : children
}

export {CheckAuth}


CheckAuth.propTypes = {
    children: PropTypes.any
}