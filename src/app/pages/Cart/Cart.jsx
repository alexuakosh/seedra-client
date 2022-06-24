import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Divider, Container, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import OrderSummary from "./OrderSummary.jsx";
import CartList from "./CartList.jsx";
import {
  countTotalAmountOrder,
  fetchCart,
} from "../../../store/thunks/cart.thunks";
import Preloader from "../../../ui/components/Preloader/Preloader.jsx";
import MobileCartList from "./MobileCartList.jsx";

const useStyles = makeStyles((theme) => ({
  yourCartHeading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px !important",
    marginTop: "40px !important",
    fontWeight: "bold !important",
  },

  contShopBtn: {
    width: "206px",
    height: "51px",
    marginTop: "50px",
    marginLeft: "40px",
    marginBottom: "147px",
    color: theme.palette.text.secondary,
    textTransform: "none",
  },
}));

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart) || [];
  const loading = useSelector((state) => state.cart.downloadRequestState);
  const isLoggedIn = useSelector((state) => state.customer.isLoggedIn);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchCart());
  }, [isLoggedIn]);
  useEffect(() => {
    dispatch(countTotalAmountOrder());
  }, [cart]);

  if (loading !== "success") {
    return <Preloader />;
  }
  if (Array.isArray(cart) && !cart.length) {
    return (
      <Container>
        <Typography
          className={classes.yourCartHeading}
          variant="h2"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          No Products in Cart
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Box
        className={classes.cartContainer}
        display={{ xs: "flex", sm: "flex" }}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={"center"}
        alignItems={{ xs: "center", sm: "baseline" }}
      >
        <Box>
          <Box>
            <Typography
              className={classes.yourCartHeading}
              variant="h2"
              component="h2"
              fontSize={{ xs: "22px", sm: "36px" }}
              paddingLeft={{ xs: "15px", sm: 0 }}
            >
              Your cart.
              <Typography
                variant="h3"
                component="h3"
                fontSize={{ xs: "16px", sm: "24px" }}
                color={"rgba(112, 115, 124, 1)"}
                paddingRight={{ xs: "15px", sm: 0 }}
              >
                {cart.length} items
              </Typography>
            </Typography>
          </Box>
          <Divider />
          <Box component="main" className={classes.cartContainer}>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <CartList />
            </Box>
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <MobileCartList />
            </Box>
          </Box>
        </Box>
        <OrderSummary />
      </Box>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            border: "1px solid rgba(112, 115, 124, 1)",
            borderRadius: "8px",
          }}
          className={classes.contShopBtn}
          variant="outlined"
          disableRipple
        >
          <Typography>Continue Shoping</Typography>
        </Button>
      </Link>
    </>
  );
};


export default Cart;
