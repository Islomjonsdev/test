import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./scss/index.scss";
import App from "./App.jsx";
import { Provider } from "react-redux";
import{ store } from "./redux/store/store"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
