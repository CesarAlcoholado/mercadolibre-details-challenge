import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";

import theme from "./theme";
import HomeScreen from "./app/screens/Home";
import DetailsScreen from "./product/screens/Details";
import mock from "./product/mock";

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route element={<HomeScreen />} path="/" />
          <Route element={<DetailsScreen product={mock.product} />} path="/productId" />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </>,
  document.getElementById("root"),
);
