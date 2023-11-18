import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index={true} element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
