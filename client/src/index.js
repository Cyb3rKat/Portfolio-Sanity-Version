import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";

// Importing Main & Package CSS Files
import "./index.css";
import "remixicon/fonts/remixicon.css";

// Import Swiper styles
// eslint-disable-next-line
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-cards";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
