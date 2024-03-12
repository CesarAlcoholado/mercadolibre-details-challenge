import React from "react";
import {Route} from "react-router-dom";

import DetailsScreen from "../product/screens/Details";
import mock from "../product/mock";

import HomeScreen from "./screens/Home";

import App from ".";

const Routes: React.FC = () => {
  return (
    <Routes>
      <App />
      <Route element={<HomeScreen />} path="/" />
      <Route element={<DetailsScreen product={mock.product} />} path="/productId" />
    </Routes>
  );
};

export default Routes;
