import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {ProductCardRender} from "../../../ui/components/ProductCard/ProductCard.jsx"
import RenderComponent from "../../hoc/RenderComponent.jsx";
import { useFetch } from "../../hoc/useFetch.jsx";
import { API } from "../../constants/index";
import fetchCategories from "../../../store/thunks/catalog.thunks";
import Spinner from "../../../ui/components/Spinner/Spinner.jsx";


const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, data, error] = useFetch(`${API}products/${id}`);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <RenderComponent
      loading={loading}
      data={{...data, isProductPage: true}}
      renderSuccess={ProductCardRender}
      loadingFallback={<span><Spinner /></span>}
      renderError={error}
    />
  )
}

export default Product;