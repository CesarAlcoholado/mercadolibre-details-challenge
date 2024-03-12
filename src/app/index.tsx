import React from "react";
import {Container, Text, Stack, Box, Input, Icon, Image, StackDivider} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {IoLocationOutline} from "react-icons/io5";
import {CgShoppingCart} from "react-icons/cg";

import Logo from "../assets/mercadoLibre.webp";
import Suscription from "../assets/suscription.webp";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
      <Box backgroundColor="primary.550" boxShadow="sm" paddingY="2">
        <Container maxWidth="container.xl">
          <Stack>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" flex="1" spacing="10">
                <Image objectFit="contain" src={Logo} />
                <Stack
                  alignItems="center"
                  backgroundColor="white"
                  borderRadius="sm"
                  boxShadow="sm"
                  direction="row"
                  divider={<StackDivider />}
                  maxWidth="580"
                  padding="2"
                  width="100%"
                >
                  <Input paddingX="2" variant="unstyled" />
                  <Icon as={AiOutlineSearch} color="gray.500" height="5" width="5" />
                </Stack>
              </Stack>
              <Stack direction="row">
                <Image height="39px" src={Suscription} width="340px" />
              </Stack>
            </Stack>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Stack alignItems="baseline" direction="row" spacing={16}>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Icon as={IoLocationOutline} height="6" width="6" />
                  <Stack spacing="0">
                    <Text color="blackAlpha.700" fontSize="xs" lineHeight="1.5">
                      Enviar a
                    </Text>
                    <Text fontSize="sm" lineHeight="1.5">
                      Bahia Blanca
                    </Text>
                  </Stack>
                </Stack>
                <Stack color="blackAlpha.700" direction="row" fontSize="sm" spacing={5}>
                  <Text>Categorias</Text>
                  <Text>Ofertas</Text>
                  <Text>Historial</Text>
                  <Text>Supermercado</Text>
                  <Text>Moda</Text>
                  <Text>Mercado Play</Text>
                  <Text>Vender</Text>
                  <Text>Ayuda</Text>
                </Stack>
                <Stack alignItems="center" direction="row" fontSize="sm" spacing={4}>
                  <Text>Crea tu cuenta</Text>
                  <Text>Ingresa</Text>
                  <Text>Mis compras</Text>
                  <Icon as={CgShoppingCart} height="6" width="6" />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Routes />
      </Container>
    </Stack>
  );
};

export default App;
