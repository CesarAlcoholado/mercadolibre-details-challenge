import React from "react";
import {Container, Link, Text} from "@chakra-ui/react";

import App from "..";

const HomeScreen: React.FC = () => {
  return (
    <>
      <App />
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Text>{`<HomeScreen Test/>`}</Text>
        <br />
        <Link href="/productId">Ver página de detalle de producto</Link>
      </Container>
    </>
  );
};

export default HomeScreen;
