
import { useState } from "react";

import { IconButton, Divider, ListItemIcon, MenuItem, Menu, Avatar } from "@mui/material";
import { AccountCircle, Settings, Logout, Favorite, History } from "@mui/icons-material";
import { Link } from "react-router-dom";




export default function ProfileMenu () {
    const [anchorEl, setAnchorEl] = useState(null);
    const logout = () => {
        localStorage.removeItem('jwt')
        window.location.reload()
    }
    
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return(
        <>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            ><AccountCircle />
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
                zIndex: 0,
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem>
                <Avatar/> Profile
            </MenuItem>
            <Divider />
            <Link style={{ textDecoration: 'none', color: "black" }} to="/wishlist">
                <MenuItem >
                    <ListItemIcon>
                        <Favorite fontSize="small" />                    
                    </ListItemIcon> Favourites
                </MenuItem>
            </Link> 

            <Link style={{ textDecoration: 'none',color: "black" }} to="/history"> 
                <MenuItem >
                    <ListItemIcon>
                        <History fontSize="small" />
                    </ListItemIcon> My orders
                </MenuItem>    
            </Link> 
                  
            <Link style={{ textDecoration: 'none', color: "black" }}  to="/settings">
                <MenuItem >
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon> Settings
                </MenuItem>
            </Link>

            <MenuItem onClick={logout}>
                <ListItemIcon>
                    <Logout fontSize="small"/>
                </ListItemIcon> Logout
            </MenuItem>

        </Menu>
      </>
    )
}