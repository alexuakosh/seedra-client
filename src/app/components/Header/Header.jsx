/* eslint-disable no-nested-ternary */

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import SearchAppBar from "./HeaderSearch/SearchAppBar.jsx";
import {
  loginStateSelector,
  cartQuantitySelector,
  wishlistQuantitySelector,
  isAdminStateSelector,
} from "../../../store/selectors/selectors";
import LogoBtn from "./HeaderBtns/LogoBtn.jsx";
import CartBtn from "./HeaderBtns/CartBtn.jsx";
import FavoriteBtn from "./HeaderBtns/FavoriteBtn.jsx";
import HeaderNavMenu from "./HeaderNavMenu/HeaderNavMenu.jsx";
import { fetchWishlist } from "../../../store/thunks/wishlist.thunks";
import { fetchCart } from "../../../store/thunks/cart.thunks";

import Auth from "../Forms/Auth.jsx";
import ProfileMenu from "./ProfileMenu.jsx";
import ProfileMenuAdmin from "./ProfileMenuAdmin.jsx";

import classes from "./HeaderStyles.jsx";


const Header = ({ arrNoChildrenBlock, arrWithChildrenBlock, logoPath }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(loginStateSelector);
  const isAdmin = useSelector(isAdminStateSelector);
  const favoriteQuantity = useSelector(wishlistQuantitySelector) ?? 0;
  const cartQuantity = useSelector(cartQuantitySelector) ?? 0;
  const slidesItemId = useSelector((state) => state.slides.slidesItemId);


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMenuOpen((prevVal) => !prevVal);
  };
  const handleClickAway = (e) => {
    if (e.target.dataset.testid !== "MenuIcon") {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      dispatch(fetchCart(slidesItemId));
    }
  }, []);

  useEffect(() => {
    dispatch(fetchWishlist)
  }, [])
  
  
  return (
    <Box sx={classes.Header}>
      <AppBar position="static" color="inherit" sx={{ boxShadow: "none" }}>
        <Toolbar
          disableGutters={true}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {logoPath ? <LogoBtn linkPath={logoPath} /> : <LogoBtn />}
          <Box display={{ xs: "none", sm: "none", md: "none", lg: "block" }}>
            
            <HeaderNavMenu
              resolution={"desktop"}
              parentsListWithoutChildren={arrNoChildrenBlock}
              parentsListWithChildren={arrWithChildrenBlock}
              admin={isAdmin}
            />
          </Box>
          <Box display={{ xs: "none", sm: "none", md: "flex", lg: "none" }}>
            
            <HeaderNavMenu
              resolution={"table"}
              parentsListWithoutChildren={arrNoChildrenBlock}
              parentsListWithChildren={arrWithChildrenBlock}
              admin={isAdmin}
            />
          </Box>
          <Box 
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              display={{ xs: "none", sm: "none", md: "block" }}
              sx={{ mr: "30px" }}
            >
              <SearchAppBar />
            </Box>

            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {isLogin && isAdmin === false && (
                <FavoriteBtn quantity={favoriteQuantity} />
              )}

              {isAdmin === false && (
                <CartBtn
                  quantity={cartQuantity}
                  marginRight={!isLogin ? "30px" : { xs: "30px", md: "0" }}
                />
              )}

              <Box display={{ xs: "none", sm: "none", md: "flex" }}>
                {!isLogin ? (
                  <Box
                    sx={{
                      width: "fit-content",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Auth />
                  </Box>
                ) : isAdmin ? (
                  <ProfileMenuAdmin onClose={handleClickAway} />
                ) : (
                  <ProfileMenu onClose={handleClickAway} />
                )}
              </Box>
            </Box>

            <Box display={{ xs: "block", sm: "block", md: "none" }}>
              <IconButton
                id="menuBtn"
                size="large"
                edge="start"
                color="primary"
                aria-label="menu"
                onClick={handleMobileMenuOpen}
                sx={{ mr: 0 }}
              >
                <MenuIcon sx={{ color: isMenuOpen ? "#359740" : "#70737C" }} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        {isMenuOpen && (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box>
              <HeaderNavMenu
                login={isLogin}
                admin={isAdmin}
                resolution={"mobile"}
                parentsListWithoutChildren={arrNoChildrenBlock}
                parentsListWithChildren={arrWithChildrenBlock}
                onClose={handleClickAway}
              />
            </Box>
          </ClickAwayListener>
        )}
      </Box>
    </Box>
  );
};


Header.defaultProps = {
  arrWithChildrenBlock: [
    { parentId: "herbs", name: ["herbs-mono", "herbs-mix"] },
    { parentId: "vegetables", name: ["vegetables-mono", "vegetables-mix"] },
    { parentId: "flowers", name: ["flowers-mono", "flowers-mix"] },
  ],
  arrNoChildrenBlock: [
    ["products", "all"],
    [
      "products?perPage=9&startPage=1&sort=-currentPrice&categories=herbs-mix%2Cvegetables-mix%2Cflowers-mix",
      "bundles",
    ],
  ],
};

Header.propTypes = {
  arrWithChildrenBlock: PropTypes.arrayOf(
    PropTypes.shape({
      parentID: PropTypes.string,
      name: PropTypes.array,
    })
  ),
  arrNoChildrenBlock: PropTypes.array,
  logoPath: PropTypes.string,
};

export default Header;
