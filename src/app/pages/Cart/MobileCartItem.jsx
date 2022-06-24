import {
  Box,
  Typography,
  IconButton,
  ButtonGroup,
  Button,
  FilledInput,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  changeProductQuantity,
  decreaseProductQuantity,
  deleteProductFromCart,
} from "../../../store/thunks/cart.thunks";

const useStyles = makeStyles((theme) => ({
  mobileCartProductContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "15px",
    padding: "15px",
  },
  deleteBtnContainer: {
    display: "flex",
    justifyContent: "center",
  },
  cartDeleteBtn: {
    width: "22px",
    height: "22px",
    paddingTop: "15px",
    paddingBottom: "18px",
    color: theme.palette.error.main,
  },
  productDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  productName: {
    textTransform: "capitalize",
    fontSize: "14px",
    lineHeight: "24.95px",
  },
  cartImage: {
    width: "64px",
    height: "63px",
    paddingLeft: "16px",
  },
  productAmount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "30px",
    color: theme.palette.text.secondary,
  },
  buttonGroup: {
    "& .MuiButtonGroup-root": {
      display: "flex",
      alignItems: "center",
      width: "104px",
      height: "44px",
    },
  },
  filledInput: {
    width: "32px",
    height: "32px",
    borderRadius: "5px",
    backgroundColor: theme.palette.disable.main,
  },
  productPrice: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "30px",
    paddingRight: "15px",
  },
  productTotalPrice: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "30px",
    paddingRight: "15px",
  },

  priceTitle: {
    color: theme.palette.text.secondary,
  },

  totalTitle: {
    color: theme.palette.text.secondary,
  },
}));

const MobileCartItem = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <Box
        component={"div"}
        className={classes.mobileCartProductContainer}
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          borderRadius: "12px",
        }}
      >
        <Box>
          <Typography component={"div"} className={classes.deleteBtnContainer}>
            <IconButton
              className={classes.cartDeleteBtn}
              onClick={() => {
                dispatch(deleteProductFromCart(product.id));
              }}
            >
              <CancelIcon />
            </IconButton>
          </Typography>
        </Box>
        <Box component={"div"} className={classes.productDetails}>
          <Typography component={"p"} className={classes.productName}>
            {product.name}
          </Typography>
          <img
            className={classes.cartImage}
            src={product.img}
            alt={product.name}
          />
        </Box>
        <Box component={"div"} className={classes.productAmount}>
          <Typography component={"p"}>AMOUNT</Typography>
          <ButtonGroup
            className={classes.buttonGroup}
            color="primary"
            variant="outlined"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => {
                dispatch(decreaseProductQuantity(product.id));
              }}
              variant="text"
              disabled={product.quantity <= 1}
              className={classes.btnGroupBtn}
            >
              {"-"}
            </Button>
            <FilledInput
              className={classes.filledInput}
              inputProps={{ sx: { textAlign: "center" } }}
              disableUnderline={true}
              hiddenLabel={true}
              value={product.cartQuantity}
              onChange={(e) =>
                dispatch(changeProductQuantity(product.id, +e.target.value))
              }
            />
            <Button
              onClick={() => {
                dispatch(addProductToCart(product.id));
              }}
              variant="text"
              className={classes.btnGroupBtn}
            >
              {"+"}
            </Button>
          </ButtonGroup>
        </Box>
        <Box component={"div"} className={classes.productPrice}>
          <Typography className={classes.priceTitle}>PRICE</Typography>
          <Box>
            <Typography>${product.price}</Typography>
          </Box>
        </Box>

        <Box component={"div"} className={classes.productTotalPrice}>
          <Typography className={classes.totalTitle}>TOTAL</Typography>
          <Box>
            <Typography>${product.totalPrice.toFixed(2)}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

MobileCartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    cartQuantity: PropTypes.number,
    price: PropTypes.number,
    totalPrice: PropTypes.number,
  }),
};

export default MobileCartItem;
