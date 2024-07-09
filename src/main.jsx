import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "jotai";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";
import store from "./atom/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

    <ToastContainer position="bottom-right" />
  </React.StrictMode>,
);
