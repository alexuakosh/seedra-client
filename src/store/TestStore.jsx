import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  filterProductsByCategory,
} from "./thunks/products.thunks";

import { loginCustomer } from "./thunks/customer.thunks";

import {
  productsSelector,
  customersSelector,
  slidesSelector,
  allCategoriesSelector,
  mainCategoriesSelector,
} from "./selectors/selectors";
import fetchSlides from "./thunks/slides.thunks";
import fetchCategories from "./thunks/catalog.thunks";

function TestStore() {
  const allCategories = useSelector(allCategoriesSelector);
  const mainCategories = useSelector(mainCategoriesSelector);
  const downloadRequestState = useSelector('');
  const productList = useSelector(productsSelector);
  const slideList = useSelector(slidesSelector);
  const customerInfo = useSelector(customersSelector);

  console.log(allCategories);
  console.log(mainCategories);
  console.log(customerInfo);
  console.log(slideList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  useEffect(() => {
    dispatch(fetchSlides());
  }, []);
  
//   const newCustomer = {
//     "firstName": "Valeron",
//     "lastName": "Drinkins",
//     "login": "valeron",
//     "email": "valeron.it@gmail.com",
//     "password": "justdrink",
//     "telephone": "+380679007060",
//     "gender": "male",
//     "isAdmin": false
// };

  // useEffect(() => {
  //   dispatch(addCustomer(newCustomer));
  // }, []);

  //   const newCustomer = {
  //     "firstName": "Valeron",
  //     "lastName": "Drinkins",
  //     "login": "valeron",
  //     "email": "valeron.it@gmail.com",
  //     "password": "justdrink",
  //     "telephone": "+380679007060",
  //     "gender": "male",
  //     "isAdmin": false
  // };

  //   useEffect(() => {
  //     dispatch(addCustomer(newCustomer));
  //   }, []);

  const userData = {
    loginOrEmail: "valeron",
    password: "justdrink",
  };

  return (
    <div>
      <ul>
        {downloadRequestState === "success" &&
          productList.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
      </ul>
      <button onClick={() => dispatch(filterProductsByCategory("herbs"))}>
        ONLY HERBS
      </button>
      <button onClick={() => dispatch(loginCustomer(userData))}>LOGIN</button>
      {/* <---test */}
    </div>
  );
}
export default TestStore;
