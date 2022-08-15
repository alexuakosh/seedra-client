
import { useState } from "react"; 
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { IconButton, Divider, ListItemIcon, MenuItem, Menu } from "@mui/material";
import { AccountCircle, Settings, Logout } from "@mui/icons-material";




const ProfileMenuAdmin = ({ onClose }) => { 

    const navigation = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null); 

    const logout = () => {
        localStorage.removeItem('jwt'); 
        navigation('/'); 
        window.location.reload();  
    } 



    const open = Boolean(anchorEl); 

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    }; 

    const handleClose = () => {
      setAnchorEl(null);
    }; 
    
    return (
        <>
            <IconButton
                sx={{fontSize: '28px', color: '#FF6D6D'}} 
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <AccountCircle />
            </IconButton> 

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: '150',  
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
            
                <Link  style={{ textDecoration: 'none', color: "black" }} 
                       to="/add-product" 
                       onClick={() => onClose()} >
                    <MenuItem >
                        <ListItemIcon>
                            <Settings fontSize="small" 
                                      sx={{color: '#FF6D6D'}} />
                        </ListItemIcon> Add Product
                    </MenuItem>
                </Link> 

                <Divider /> 

                <MenuItem onClick={logout}>
                    <ListItemIcon>
                        <Logout fontSize="small" sx={{color: '#FF6D6D'}}/>
                    </ListItemIcon> Logout
                </MenuItem>
            
            </Menu>
      </>
    )
}

export default ProfileMenuAdmin; 


ProfileMenuAdmin.propTypes = {
    onClose: PropTypes.func, 
};