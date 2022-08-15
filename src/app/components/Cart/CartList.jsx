import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import fetchSlides from "../../../store/thunks/slides.thunks";
import CartItem from "./CartItem.jsx";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    "& .MuiTableContainer-root": {
      boxShadow: "none",
    },
    "& .MuiTable-root": {
      width: "700px",
    },
  },
  tableTitle: {
    "& .MuiTableCell-root": {
      color: theme.palette.text.secondary,
      paddingTop: "24px",
      paddingBottom: "24px",
    },
  },
  productDetails: {
    width: "",
  },
}));

const CartList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSlides());
  }, []);

  const cart = useSelector((state) => state.cart.cart) || [];

  const slidesItemId = useSelector((state) => state.slides.slidesItemId);

  const classes = useStyles();

  const cartList = cart.map((cartItem) => {
    const totalPrice =
      Number(cartItem.cartQuantity) * Number(cartItem.currentPrice);

    return (
      <CartItem
        key={cartItem.id}
        product={{
          ...cartItem,
          img: cartItem.imageUrls[0],
          name: cartItem.name,
          isBasket: true,
          quantity: cartItem.cartQuantity,
          price: cartItem.currentPrice,
          totalPrice,
        }}
        slidesItemId={slidesItemId}
      />
    );
  });

  return (
    <>
      <TableContainer className={classes.tableContainer}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="product-list">
          <TableHead className={classes.tableTitle}>
            <TableRow>
              <TableCell className={classes.productDetails}>
                PRODUCT DETAILS
              </TableCell>
              <TableCell align="right">AMOUNT</TableCell>
              <TableCell align="right">PRICE</TableCell>
              <TableCell align="right">TOTAL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{cartList}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CartList;
