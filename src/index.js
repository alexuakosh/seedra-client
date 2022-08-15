
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import { store, persistor } from "./store/store";
import CustomThemeProvider from "./ui/hoc/CustomThemeProvider.jsx";
import Preloader from "./ui/components/Preloader/Preloader.jsx";



Sentry.init({
  dsn: "https://a3852a19febc49db91333d723d2c2285@o1313863.ingest.sentry.io/6564436",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

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