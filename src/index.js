// import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import { store, persistor } from "./store/store";
import CustomThemeProvider from "./ui/hoc/CustomThemeProvider.jsx";
import Preloader from "./ui/components/Preloader/Preloader.jsx";

// ==================================================

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Preloader />} persistor={persistor}>
      <CustomThemeProvider>
       <App />
      </CustomThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
