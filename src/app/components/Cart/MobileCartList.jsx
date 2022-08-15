import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import MobileCartItem from "./MobileCartItem.jsx";
import fetchSlides from "../../../store/thunks/slides.thunks";

const MobileCartList = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSlides());
  }, []);

  const cart = useSelector((state) => state.cart.cart) || [];
  const slidesItemId = useSelector((state) => state.slides.slidesItemId);
  

  const cartListMobile = cart.map((cartItem) => {
    const totalPrice =
      Number(cartItem.cartQuantity) * Number(cartItem.currentPrice);

    return (
      <MobileCartItem
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

  return <Box>{cartListMobile}</Box>;
};

export default MobileCartList;

