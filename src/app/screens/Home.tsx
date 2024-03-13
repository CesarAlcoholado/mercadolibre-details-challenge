import React from "react";
import {Container, Link, Text} from "@chakra-ui/react";

import App from "..";

const HomeScreen: React.FC = () => {
  return (
    <>
      <App />
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        {/* <Text>{`<HomeScreen Test/>`}</Text> */}
        <br />
        <Text backgroundColor="yellow.300">
          @Disclaimer: Esta pagina es un desafio, no tiene ninguna relacion con la empresa de
          Mercado Libre, ni es un intento de estafa mediante Phishing
        </Text>
        <Link href="/productId">Ver página de detalle de producto</Link>
      </Container>
    </>
  );
};

export default HomeScreen;
