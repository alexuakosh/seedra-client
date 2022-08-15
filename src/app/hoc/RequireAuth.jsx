import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';


const RequireAuth = ({children}) => {
    const auth = localStorage.getItem("jwt")
    return !auth ? <> <Navigate to='/login'/> </> : children
}

export {RequireAuth}


RequireAuth.propTypes = {
    children: PropTypes.any
}