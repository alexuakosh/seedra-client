import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from "react-router-dom";
import { Badge, IconButton, MenuItem } from "@mui/material";
import useStyles from "../../HeaderStyles.jsx";
import {fetchCart} from "../../../../../store/thunks/cart.thunks";
import {
  cartQuantitySelector
} from "../../../../../store/selectors/selectors";

const CartIcon = () => {
  const classes = useStyles();

  const totalCartQuantity = useSelector(cartQuantitySelector);
  const slidesItemId = useSelector((state) => state.slides.slidesItemId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart(slidesItemId));
  }, []);

  
  const RoutesName = {
    cart: "/cart",
  };

  return (
    <Link to={RoutesName.cart}>
      {
        <MenuItem className={classes.headerMenuItem}>
          <IconButton>
            <Badge badgeContent={totalCartQuantity} color="primary" sx={{ mr: "0px"}}>
              <ShoppingCartOutlinedIcon className={classes.iconsStyle} />
            </Badge>
          </IconButton>
        </MenuItem>
      }
    </Link>
  );
};

export default CartIcon;
