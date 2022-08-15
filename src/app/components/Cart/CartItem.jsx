import {
  TableCell,
  Typography,
  TableRow,
  ButtonGroup,
  Button,
  FilledInput,
  IconButton,
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
  tableRow: {
    "& .MuiTableCell-root": {
      paddingTop: "20px",
      paddingBottom: "20px",
    },
  },
  productDetails: {
    display: "flex",
  },
  cartImage: {
    width: "64px",
    height: "63px",
    paddingRight: "16px",
  },
  productName: {
    textTransform: "capitalize",
    fontSize: "14px",
    lineHeight: "24.95px",
  },
  cartDeleteBtn: {
    position: "relative",
    left: "11px",
    top: "-11px",
    width: "22px",
    height: "22px",
    color: theme.palette.error.main,
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
    width: "auto",
    height: "32px",
    borderRadius: "5px",
    backgroundColor: theme.palette.disable.main,
  },
}));

const CartItem = ({ product, slidesItemId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <TableRow
      className={classes.tableRow}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Typography>
          <Typography component={"div"} className={classes.productDetails}>
            <IconButton
              className={classes.cartDeleteBtn}
              onClick={() => {
                dispatch(deleteProductFromCart(product.id, slidesItemId));
              }}
            >
              <CancelIcon />
            </IconButton>
            <img
              className={classes.cartImage}
              src={product.img}
              alt={product.name}
            />
            <Typography component={"p"} className={classes.productName}>
              {product.name}
            </Typography>
          </Typography>
        </Typography>
      </TableCell>
      <TableCell align="right">
        <ButtonGroup
          className={classes.buttonGroup}
          color="primary"
          variant="outlined"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => {
              dispatch(decreaseProductQuantity(product.id, slidesItemId));
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
            onChange={(e) => {
              if (/[0-9]/.test(+e.target.value)) { 
                dispatch(
                  changeProductQuantity(
                    product.id,
                    +e.target.value,
                    product.name,
                    product.currentPrice,
                    product.imageUrls,
                    product.startingPrice,
                    product.discountPrice,
                    slidesItemId
                  )
                )
              }
            }
            }
          />
          <Button
            onClick={() => {
              dispatch(addProductToCart(product.id, slidesItemId));
            }}
            variant="text"
            className={classes.btnGroupBtn}
          >
            {"+"}
          </Button>
        </ButtonGroup>
      </TableCell>
      <TableCell align="right">${product.price}</TableCell>
      <TableCell align="right">${product.totalPrice.toFixed(2)}</TableCell>
    </TableRow>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    cartQuantity: PropTypes.number,
    price: PropTypes.number,
    totalPrice: PropTypes.number,
    currentPrice: PropTypes.number,
    imageUrls: PropTypes.array,
    startingPrice: PropTypes.number,
    discountPrice: PropTypes.number,
  }),
  slidesItemId: PropTypes.array,
};

export default CartItem;
