import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wishlistSelector } from "../../../store/selectors/selectors";
import { addProductToWishlist, deleteProductFromWishlist } from "../../../store/thunks/wishlist.thunks";

export const useWishlist = (_id) => {
    const [isFavourite, toggleIsFavourite] = useState(false);

    const dispatch = useDispatch();
    const wishlist = useSelector(wishlistSelector);

    useEffect(() => {
    if (wishlist) {
        toggleIsFavourite(!!wishlist.products.find((item) => item._id === _id));
    }
    }, [wishlist]);

    const toggleInWishlist = () => {
        isFavourite
          ? dispatch(deleteProductFromWishlist(_id))
          : dispatch(addProductToWishlist(_id))
    }
    
    return [
        isFavourite,
        toggleInWishlist
    ]
}