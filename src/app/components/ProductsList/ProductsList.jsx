import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import RenderComponent  from "../../hoc/RenderComponent.jsx";
import ProductsListSection from "../../../ui/components/ProductsListSection/ProductsListSection.jsx";
import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";
import { downloadFilteredProductsRequestStateSelector, filteredProductsSelector } from "../../../store/selectors/selectors";

const ProductsList = () => {
  const downloadRequestState = useSelector(downloadFilteredProductsRequestStateSelector);
  const productList = useSelector(filteredProductsSelector);

  return (
      <RenderComponent
        loading={downloadRequestState}
        data={{products: productList}}
        renderSuccess={ProductsListSection}
        loadingFallback={<ProductsListSection isLoading={true} />}
        renderError={<ErrorHandler errorMessage="There is some problem with products downloading"/>}
      />
    )
}

ProductsList.propTypes = {
  productList: PropTypes.array,
  loading: PropTypes.string,
};


export default ProductsList;
