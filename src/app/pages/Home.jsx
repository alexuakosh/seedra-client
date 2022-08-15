import { Box } from "@mui/material";
import { useEffect } from "react";
import { 
  useDispatch
} from "react-redux";
import OurProducts from "../components/OurProducts/OurProducts.jsx";
import { API, PRODUCTS_NUMBER_ON_MAIN_PAGE } from "../constants";
import MainPageCarousel from "../components/MainPageCarousel/MainPageCarousel.jsx";
import ProductsList from "../components/ProductsList/ProductsList.jsx";
import fetchCategories from "../../store/thunks/catalog.thunks";
import fetchSlides from "../../store/thunks/slides.thunks";
import { fetchProducts } from "../../store/thunks/products.thunks";
import { fetchWishlist } from "../../store/thunks/wishlist.thunks";
import Comments from "../components/Comments/Comments.jsx";


const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSlides());
    dispatch(fetchProducts(`${API}products/filter?perPage=${PRODUCTS_NUMBER_ON_MAIN_PAGE}`));
    dispatch(fetchCategories());
    dispatch(fetchWishlist());
  }, []);

  return (
    <>
      <Box component="main">
        <MainPageCarousel />
        <OurProducts />
        <ProductsList />
        <Comments />
      </Box>
    </>
  );
};

export default Home;
