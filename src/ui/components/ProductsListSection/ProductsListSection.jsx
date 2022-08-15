import { Box, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types"; 

import { PRODUCTS_NUMBER_ON_MAIN_PAGE } from "../../../app/constants"; 

import ProductCard from "../ProductCard/ProductCard.jsx";
import ProductCardLoader from "../ProductCard/ProductCardLoader.jsx";




const ProductsListSection = ({ data, loading, isLoading, productsNumber }) => {

  const productsFlteredArr = data?.products || [];

  return (
    <>
      <Box sx={{ marginTop: "30px", marginBottom: "89px" }}>
        <Grid
          container={true}
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {isLoading ? 
          [...Array(productsNumber)].map((item, index) => (
            <ProductCardLoader key={index} />
          )) :
          productsFlteredArr?.map((product, i) => (
              <ProductCard
                key={product.id || i}
                product={product}
                loading={loading}
              />
            )
          )}
          {productsFlteredArr?.length === 0 && (
            <Box sx={{height: "512px", display: "flex", width: "100%", justifyContent: "center", marginTop:"40px"}}>
              <Typography
                variant="h3"
                color="text.primary"
              >
                List is empty
              </Typography>
            </Box>
          )}
        </Grid>
      </Box>
    </>
  );
};

ProductsListSection.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.string,
  isLoading: PropTypes.bool,
  productsNumber: PropTypes.number
};

ProductsListSection.defaultProps = {
  productsNumber: PRODUCTS_NUMBER_ON_MAIN_PAGE 
}

export default ProductsListSection;
