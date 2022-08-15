import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import catalog from "./reducers/catalog.reducer";
import products from "./reducers/products.reducer";
import slides from "./reducers/slides.reducer";
import customer from "./reducers/customer.reducer";
import cart from "./reducers/cart.reducer";
import wishlist from "./reducers/wishlist.reducer";
import staticPage from "./reducers/staticPage.reducer";
import filters from "./reducers/filters.reducer"; 
import admin from "./reducers/admin.reducer";
import comments from "./reducers/comments.reducer";
import  mainPageCarousel from "./reducers/mainPageCarousel.reducer"


const reduxDevToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  catalog,
  products,
  slides,
  customer,
  cart,
  wishlist,
  filters,
  staticPage, 
  admin,
  comments,
  mainPageCarousel,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  devTools: reduxDevToolsCompose,
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
