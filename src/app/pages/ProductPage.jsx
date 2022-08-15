import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Product from "../components/Product/Product.jsx";
import CustomerReviews from "../components/CustomerReviews/CustomerReviews.jsx";
import { fetchProductById } from "../../store/thunks/products.thunks";

const ProductPage = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id]); 

  useEffect(() => {
    window.scrollTo(0, 0); 
    
}, []);

  return (
    <>
      <Product />
      <CustomerReviews />
    </>
  )
}


export default ProductPage;