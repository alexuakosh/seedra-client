import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ProductCardRender} from "../../../ui/components/ProductCard/ProductCard.jsx"
import RenderComponent from "../../hoc/RenderComponent.jsx";
import fetchCategories from "../../../store/thunks/catalog.thunks";
import fetchSlides from "../../../store/thunks/slides.thunks";
import Spinner from "../../../ui/components/Spinner/Spinner.jsx";
import { downloadProductRequestStateSelector, productSelector } from "../../../store/selectors/selectors";


const Product = () => {
  
  const dispatch = useDispatch();
  const data = useSelector(productSelector);
  const loading = useSelector(downloadProductRequestStateSelector);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSlides()); 
  }, []);

  return (
    <RenderComponent
      loading={loading}
      data={{...data, isProductPage: true}}
      renderSuccess={ProductCardRender}
      loadingFallback={<span><Spinner /></span>}
      renderError={"error"}
    /> 
  )
}

export default Product;