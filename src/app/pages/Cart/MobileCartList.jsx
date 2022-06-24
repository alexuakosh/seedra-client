import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import MobileCartItem from "./MobileCartItem.jsx";

const MobileCartList = () => {
  const cart = useSelector((state) => state.cart.cart) || [];

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
      />
    );
  });

  return <Box>{cartListMobile}</Box>;
};

export default MobileCartList;
