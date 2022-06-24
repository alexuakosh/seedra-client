// import { useLocation,Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
// import LogIn from "../components/Forms/LogRegModal.jsx";

const RequireAuth = ({children}) => {
    const auth = localStorage.getItem("jwt")
    return !auth ? <> <Navigate to='/login'/> </> : children
}

export {RequireAuth}


RequireAuth.propTypes = {
    children: PropTypes.any
}