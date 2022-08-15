import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import { notAdmin } from "./app/constants"; 

import { getUserDetails } from "./store/thunks/customer.thunks";
import { fetchCart } from "./store/thunks/cart.thunks";
import {
  isAdminStateSelector, 
  loginStateSelector, 
} from "./store/selectors/selectors"; 

import Home from "./app/pages/Home.jsx";
import Cart from "./app/pages/Cart/Cart.jsx"
import AppLayout from './app/components/AppLayout/AppLayout.jsx';
import Filters from "./app/pages/Filters/Filters.jsx";
import ProductPage from './app/pages/ProductPage.jsx';
import PageNotFound from "./ui/components/PageNotFound/PageNotFound.jsx";
import LogIn from "./app/components/Forms/LogRegModal.jsx";
import Wishlist from "./app/pages/Wishlist.jsx";
import SignUp from "./app/components/Forms/RegLogModal.jsx";
import PersonalInfo from "./app/components/Forms/PersonalInfo.jsx";
import OrdersHistory from "./app/components/Forms/OrdersHistory.jsx";
import { RequireAuth } from "./app/hoc/RequireAuth.jsx";
import Checkout from "./app/pages/Checkout.jsx"
import { CheckAuth } from "./app/hoc/CheckAuth.jsx";
import { cleanUpLoginState } from "./store/actions/customer.actions";
import StaticPage from "./ui/components/StaticPage/StaticPage.jsx";
import AddProduct from "./app/components/AdminPanel/AddUpdProduct/AddProduct.jsx";
import ErrorHandler from "./app/components/ErrorHandler/ErrorHandler.jsx";




function App() {
  
  const isLogin = useSelector(loginStateSelector);
  const isAdmin = useSelector(isAdminStateSelector);
  const slidesItemId = useSelector((state) => state.slides.slidesItemId);

  const dispatch = useDispatch(); 


  useEffect(() => {
    dispatch(fetchCart(slidesItemId));
  }, []);

  useEffect(() => {
    if (localStorage.jwt) {
      dispatch(getUserDetails()); 
    }
  }, []);

  useEffect(() => {
    if (window.location.href !== "http://localhost:3000/login") {
      dispatch(cleanUpLoginState());
    }
  }, [window.location.href]); 

  

  return (
    <BrowserRouter>

      <Routes>
          <Route path="/" element={<AppLayout />} >
              <Route index element={<Home />} />
              <Route path="/products" element={<Filters />} />
              <Route path="/wishlist" element={isLogin ? <Wishlist /> : <Home />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="login" element={<CheckAuth><LogIn/></CheckAuth>} />
              <Route path="sign-up" element={<CheckAuth><SignUp/></CheckAuth>} />
              <Route path="settings" element={<RequireAuth><PersonalInfo/></RequireAuth>} />
              <Route path="history" element={<RequireAuth><OrdersHistory/></RequireAuth>} />
              <Route path="/cart" element={<Cart/>}/>
              <Route path="checkout" element={<Checkout />} />
              <Route path="/add-product" element={isAdmin ? <AddProduct/> : <ErrorHandler errorMessage={notAdmin}/>} />
              <Route path="/about-us" element={<StaticPage page={"about-us"}/>} />
              <Route path="/terms" element={<StaticPage page={"terms"} />} />
              <Route path="/privacy-policy" element={<StaticPage page={"privacy-policy"} />} />
              <Route path="/*" element={<PageNotFound/>} />
          </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;