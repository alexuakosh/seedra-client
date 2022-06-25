import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadWishlistRequestStateSelector, wishlistSelector } from "../../store/selectors/selectors";
import { fetchWishlist } from "../../store/thunks/wishlist.thunks";
import ProductsListSection from "../../ui/components/ProductsListSection/ProductsListSection.jsx";
import Spinner from "../../ui/components/Spinner/Spinner.jsx";
import ErrorHandler from "../components/ErrorHandler/ErrorHandler.jsx";
import RenderComponent from "../hoc/RenderComponent.jsx";




const Wishlist = () => {

  const wishlist = useSelector(wishlistSelector);
  const downloadWishlistRequest = useSelector(downloadWishlistRequestStateSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWishlist());
  }, []);

  return (
    <RenderComponent
      loading={downloadWishlistRequest}
      data={wishlist}
      renderSuccess={ProductsListSection}
      loadingFallback={<Spinner />}
      renderError={<ErrorHandler errorMessage="There is some problem with products downloading"/>}
    />
  )
}

export default Wishlist;