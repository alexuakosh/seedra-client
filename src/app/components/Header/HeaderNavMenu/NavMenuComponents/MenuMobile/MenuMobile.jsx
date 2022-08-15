import PropTypes from "prop-types";

import { Box, Paper, MenuList, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchAppBar from "../../../HeaderSearch/SearchAppBar.jsx";
import Auth from "../../../../Forms/Auth.jsx";
import ProfileMenu from "../../../ProfileMenu.jsx";
import ProfileMenuAdmin from "../../../ProfileMenuAdmin.jsx";

import MenuItemNoChildrenMobile from "./MenuMobileComponents/MenuItemNoChildrenMobile.jsx";
import MenuItemWithChildrenMobile from "./MenuMobileComponents/MenuItemWithChildrenMobile.jsx";

export default function MenuMobile({
  pressetsNoChildren,
  pressetsWithChildren,
  isLogin, 
  isAdmin, 
  onClose, 
}) {
  
  const useStyles = makeStyles((theme) => ({
    DropDownMenu: {
      width: "60%",
      [theme.breakpoints.down("xs")]: {
        width: "80%",
      },
    },
  }));
  
  const classes = useStyles();
  return (
    <Box
      display={{ xs: "flex", sm: "block", md: "flex" }}
      sx={{ flexWrap: "wrap", position: "relative" }}
    >
      <Paper
        className={classes.DropDownMenu}
        sx={{
          p: 2,
          position: "absolute",
          zIndex: "100",
          top: "0",
          right: "0",
          boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Grid sx={{ flexGrow: 1 }}>
          <Grid container sx={{ flexGrow: 1, ml: 2 }} item xs={10} alignItems='center' justifyContent='space-between'>
            <Grid item xs={2}>{isLogin && (isAdmin ? < ProfileMenuAdmin /> : <ProfileMenu />)}</Grid>
            <Grid item xs={8} alignItems='center' >
              <SearchAppBar onClose={onClose}/>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <MenuList>
              <MenuItemNoChildrenMobile arrOfOptions={pressetsNoChildren} onClose={onClose} />
              <MenuItemWithChildrenMobile arrOfOptions={pressetsWithChildren} />
            </MenuList>
          </Grid>
          <Box display="flex" sx={{ justifyContent: "space-around" }}>
            {!isLogin && (
              <Auth />
            ) }
          </Box>
        </Grid>
      </Paper>
    </Box>
  );
}

MenuMobile.propTypes = {
  pressetsNoChildren: PropTypes.array,
  pressetsWithChildren: PropTypes.array,
  isLogin: PropTypes.bool,
  isAdmin: PropTypes.bool, 
  onClose: PropTypes.func, 
};
