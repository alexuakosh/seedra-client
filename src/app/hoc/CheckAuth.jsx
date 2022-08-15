import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';


const CheckAuth = ({children}) => {
    const auth = localStorage.getItem("jwt")
    return auth ? <> <Navigate to='/'/> </> : children
}

export {CheckAuth}


CheckAuth.propTypes = {
    children: PropTypes.any
}