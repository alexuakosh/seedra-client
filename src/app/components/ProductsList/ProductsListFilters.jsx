import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import RenderComponent from "../../hoc/RenderComponent.jsx";
import ProductsListSection from "../../../ui/components/ProductsListSection/ProductsListSection.jsx";
import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";
import useFiltersStyles from "../../pages/Filters/useFiltersStyles";

const ProductsListFilters = ({ loading, productList }) => {
  const classes = useFiltersStyles();

  const updatedProducts = productList.map((product) => {
    const updatedData = { ...product, isFiltersPage: true };
    return updatedData;
  });
  const data = { products: updatedProducts, isFiltersPage: true };

  return (
    <RenderComponent
      loading={loading}
      data={data}
      renderSuccess={ProductsListSection}
      loadingFallback={
        <Typography className={classes.loader} variant="h6">
          LOADING...
        </Typography>
      }
      renderError={
        <ErrorHandler errorMessage="There is some problem with products downloading" />
      }
    />
  );
};

ProductsListFilters.propTypes = {
  productList: PropTypes.array,
  loading: PropTypes.string,
};

export default ProductsListFilters;
