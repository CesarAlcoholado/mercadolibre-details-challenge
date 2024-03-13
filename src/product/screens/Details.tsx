/* eslint-disable react/jsx-no-undef */
import React, {useState} from "react";
import {Box, Container, Divider, Grid, Link, Stack, Text} from "@chakra-ui/layout";
import {Image} from "@chakra-ui/image";
import Icon from "@chakra-ui/icon";
import {Input} from "@chakra-ui/input";
import {Button} from "@chakra-ui/button";
import {RiStarSFill} from "react-icons/ri";
import {IoMdAlert} from "react-icons/io";
import {FiCheckCircle} from "react-icons/fi";
import {AiOutlineTag} from "react-icons/ai";
import {BsChevronDown} from "react-icons/bs";
import ReactImageMagnify from "react-image-magnify";

import medal from "../../assets/medal.svg";
import message from "../../assets/messagePositive.svg";
import time from "../../assets/timePositive.svg";
import bottomCorner from "../../assets/bottomCorner.svg";
import thumbUp from "../../assets/thumbUp.png";
import thumbDown from "../../assets/thumbDown.png";
import squirtle_one from "../../assets/PelucheSquirtle.webp";
import squirtle_two from "../../assets/PelucheKawaii.webp";
import eveeWhite from "../../assets/eveeWhite.webp";
import jolteon from "../../assets/jolteon.webp";
import mewtwo from "../../assets/mewtwo.webp";
import hunter from "../../assets/hunter.webp";
import {Product} from "../types";
import mock from "../mock";
import App from "../../app";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  const [active, setActive] = useState(squirtle_one);

  // const lens = () => (
  //   <div id="lente" style={{width: "450px", height: "450px", backgroundColor: "blue"}} />
  // );

  return (
    <>
      <App />
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Stack alignItems="center" backgroundColor="#0000000a" direction="row" height="auto" my="4">
          <Divider
            borderColor="tomato"
            borderRadius="6px 0 0 6px"
            borderWidth="0 2px"
            color={"#FF6347"}
            height="50px"
            opacity=".9"
            orientation="vertical"
          />
          <Icon as={IoMdAlert} color="tomato" height="5" width="5" />
          <Text>Publicacion pausada</Text>
        </Stack>
        <Link margin="0" width="100%">
          <Text as="span" color="blackAlpha.900" fontSize="sm" mx="1">
            Volver al listado
          </Text>
          <Text as="span" color="blackAlpha.600" fontSize="sm" mx="1">
            |
          </Text>
          <Text as="span" fontSize="sm" mx="1">
            Juegos y Juguetes
          </Text>
          <Text as="span" color="blackAlpha.600" fontSize="sm" mx="1">
            {">"}
          </Text>
          <Text as="span" fontSize="sm" mx="1">
            Peluches
          </Text>
        </Link>
        <Container backgroundColor="#FFFFFF" maxWidth="container.xl" my="4" padding="4">
          <Stack direction="row">
            <Stack
              alignItems="center"
              direction="column"
              flex={1}
              justifyContent="center"
              position="relative"
              spacing={6}
              width="718px"
            >
              {/* miniaturas - con hover */}
              <Stack>
                <Image
                  borderRadius="2px"
                  left="0"
                  outline={active === squirtle_one ? "2px solid #3483fa" : undefined}
                  position="absolute"
                  src={squirtle_one}
                  top="20px"
                  width="44px"
                  onMouseOver={() => setActive(squirtle_one)}
                />
              </Stack>
              <Stack>
                <Image
                  borderRadius="2px"
                  left="0"
                  outline={active === squirtle_two ? "2px solid #3483fa" : undefined}
                  position="absolute"
                  src={squirtle_two}
                  top="80px"
                  width="44px"
                  onMouseOver={() => setActive(squirtle_two)}
                />
              </Stack>
              {/* miniaturas - con hover */}
              {/* <Image maxWidth="680px" objectFit="contain" src={active} /> */}
              <Stack maxWidth="680px">
                <ReactImageMagnify
                  {...{
                    style: {cursor: "zoom-in"},
                    smallImage: {
                      alt: "Pokemon stuffed plush",
                      isFluidWidth: true,
                      src: active,
                    },
                    largeImage: {
                      src: active,
                      width: 2300,
                      height: 2300,
                    },
                    enlargedImagePortalId: "aside",
                    enlargedImageContainerDimensions: {
                      width: "200%",
                      height: "100%",
                    },
                    lensStyle: {
                      width: "50px",
                      height: "50px",
                      backgroundColor: "transparent",
                    },
                  }}
                />
                <div
                  id="aside"
                  style={{
                    width: "350px",
                    height: "400px",
                    position: "absolute",
                    top: "40px",
                    right: "-340px",
                    overflow: "hidden",
                    zIndex: 999,
                  }}
                />
              </Stack>
              <Divider alignSelf="center" borderColor="blackAlpha.400" width="100%" />
              {/* Caracteristicas del producto */}
              <Stack direction="column" padding="6" spacing={10}>
                <Text fontSize="2xl" textAlign="left">
                  Características del producto
                </Text>
                <Stack direction="row">
                  <Stack width="100%">
                    <Stack alignItems="center" direction="row">
                      <Stack
                        alignItems="center"
                        backgroundColor="blackAlpha.200"
                        borderRadius="50%"
                        height="32px"
                        justifyContent="center"
                        width="32px"
                      >
                        <Icon as={FiCheckCircle} />
                      </Stack>
                      <Text fontSize="sm">
                        Talle:{" "}
                        <Text as="b" fontSize="sm">
                          One size
                        </Text>
                      </Text>
                    </Stack>
                    <Stack alignItems="center" direction="row">
                      <Stack
                        alignItems="center"
                        backgroundColor="blackAlpha.200"
                        borderRadius="50%"
                        height="32px"
                        justifyContent="center"
                        width="32px"
                      >
                        <Icon as={FiCheckCircle} />
                      </Stack>
                      <Text fontSize="sm">
                        Género:{" "}
                        <Text as="b" fontSize="sm">
                          Sin género
                        </Text>
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack width="100%">
                    <Stack alignItems="center" direction="row">
                      <Stack
                        alignItems="center"
                        backgroundColor="blackAlpha.200"
                        borderRadius="50%"
                        height="32px"
                        justifyContent="center"
                        width="32px"
                      >
                        <Icon as={AiOutlineTag} />
                      </Stack>
                      <Text fontSize="sm">
                        Marca:{" "}
                        <Text as="b" fontSize="sm">
                          Pokemon
                        </Text>
                      </Text>
                    </Stack>
                    <Stack alignItems="center" direction="row">
                      <Stack
                        alignItems="center"
                        backgroundColor="blackAlpha.200"
                        borderRadius="50%"
                        height="32px"
                        justifyContent="center"
                        width="32px"
                      >
                        <Icon as={FiCheckCircle} />
                      </Stack>
                      <Text fontSize="sm">
                        Edad:{" "}
                        <Text as="b" fontSize="sm">
                          Todos
                        </Text>
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack alignItems="center" direction="row">
                  <Link fontSize="sm">
                    Ver todas las caracteristicas <Icon as={BsChevronDown} height="5" width="4" />
                  </Link>
                </Stack>
                <Divider alignSelf="center" borderColor="blackAlpha.400" width="100%" />
                <Text as="b" color="blackAlpha.800" fontSize="2xl">
                  Descripción
                </Text>
                <Text color="blackAlpha.700" fontSize="xl">
                  SOMOS MERCADOLIBRE PLATINUM UNOS DE LOS MEJORES VENDEDORES EN EL SITIO!!!
                </Text>
                <Text color="blackAlpha.700" fontSize="xl">
                  TE PRESENTAMOS: PELUCHE POKEMON
                </Text>
                <Text color="blackAlpha.700" fontSize="xl">
                  TAMBIÉN TENEMOS MÁS PERSONAJES (podes consultar stock del modelo deseado o en la
                  opción donde dice COLOR)
                </Text>
                <Text color="blackAlpha.700" fontSize="xl">
                  LLEVATE AL MEJOR PRECIO
                </Text>
                <Text color="blackAlpha.700" fontSize="xl">
                  Excelente calidad y diseño Premium Ojos bordados y relleno de vellón súper soft
                  Muy suave y más hermoso que nunca!
                </Text>
                <Text color="blackAlpha.700" fontSize="xl">
                  Descripción: -16cm a 25cm según el modelo - incluye sopapa para colgarlo -muy
                  suave al tacto
                </Text>
                <Divider alignSelf="center" borderColor="blackAlpha.400" width="100%" />
                <Text as="b" fontSize="2xl">
                  Preguntas y respuestas
                </Text>
                <Text as="b" fontSize="xl">
                  ¿Qué querés saber?
                </Text>
                <Stack direction="row">
                  <Link
                    backgroundColor="purple.50"
                    borderRadius="md"
                    height="10"
                    opacity="1"
                    padding="2"
                  >
                    <Text as="b" color="#548BFA">
                      Costo y tiempo de envio
                    </Text>
                  </Link>
                  <Link
                    backgroundColor="purple.50"
                    borderRadius="md"
                    height="10"
                    opacity="1"
                    padding="2"
                  >
                    <Text as="b" color="#548BFA">
                      Devoluciones gratis
                    </Text>
                  </Link>
                  <Link
                    backgroundColor="purple.50"
                    borderRadius="md"
                    height="10"
                    opacity="1"
                    padding="2"
                  >
                    <Text as="b" color="#548BFA">
                      Medios de pago y promociones
                    </Text>
                  </Link>
                  <Link
                    backgroundColor="purple.50"
                    borderRadius="md"
                    height="10"
                    opacity="1"
                    padding="2"
                  >
                    <Text as="b" color="#548BFA">
                      Garantía
                    </Text>
                  </Link>
                </Stack>
                {/* Input para preguntar*/}
                <Stack spacing={4}>
                  <Text as="b" fontSize="xl">
                    Preguntale al vendedor
                  </Text>
                  <Stack direction="row" spacing={4}>
                    <Input
                      borderColor="blackAlpha.500"
                      height="48px"
                      padding={4}
                      placeholder="Escribí tu pregunta..."
                      type="text"
                    />
                    <Button
                      colorScheme="messenger"
                      fontSize="md"
                      height="48px"
                      padding={2}
                      width="180px"
                    >
                      Preguntar
                    </Button>
                  </Stack>
                </Stack>
                <Text as="b" fontSize="lg">
                  Ultimas realizadas
                </Text>
                <Text fontSize="md">Hola lo tenes?</Text>
                <Text fontSize="md">Hola, tienen stock?</Text>
                <Text fontSize="md">Que medidas tiene? Gracias</Text>
                <Stack spacing={0}>
                  <Text fontSize="md">Tenes a pikachu?</Text>
                  <Stack direction="row" spacing={0}>
                    <Stack direction="row" justifyContent="flex-end" spacing={0} width="6">
                      <Image height="4" src={bottomCorner} width="4" />
                    </Stack>
                    <Text color="blackAlpha.600" fontSize="md">
                      Hola, si tenemos todos los de la primera generación 16/01/24
                    </Text>
                  </Stack>
                </Stack>
                <Text as="b" fontSize="2xl">
                  Opiniones del producto
                </Text>
                {/* Opiniones del producto */}
                <Stack direction="row" spacing={6}>
                  <Stack spacing={0}>
                    <Stack direction="row">
                      <Text as="b" color="#3483FA" fontSize="5xl" lineHeight="1">
                        5.0
                      </Text>
                      <Stack justifyContent="center" spacing={0}>
                        <Stack direction="row">
                          <Icon as={RiStarSFill} color="#3483FA" height="22px" width="22px" />
                          <Icon as={RiStarSFill} color="#3483FA" height="22px" width="22px" />
                          <Icon as={RiStarSFill} color="#3483FA" height="22px" width="22px" />
                          <Icon as={RiStarSFill} color="#3483FA" height="22px" width="22px" />
                          <Icon as={RiStarSFill} color="#3483FA" height="22px" width="22px" />
                        </Stack>
                        <Text color="blackAlpha.600" fontSize="sm">
                          4 calificaciones
                        </Text>
                      </Stack>
                    </Stack>
                    <Stack
                      alignItems="center"
                      direction="row"
                      heigth="4px"
                      spacing={4}
                      width="100%"
                    >
                      <Text
                        as="span"
                        backgroundColor="#0000008c"
                        borderRadius="4"
                        height="4px"
                        width="100%"
                      />
                      <Stack alignItems="center" direction="row" spacing={1}>
                        <Text color="blackAlpha.600" fontSize="sm">
                          5
                        </Text>
                        <Icon as={RiStarSFill} color="#00000040" />
                      </Stack>
                    </Stack>
                    <Stack
                      alignItems="center"
                      direction="row"
                      heigth="4px"
                      spacing={4}
                      width="100%"
                    >
                      <Text
                        as="span"
                        backgroundColor="#0000001a"
                        borderRadius="4"
                        height="4px"
                        width="100%"
                      />
                      <Stack alignItems="center" direction="row" spacing={1}>
                        <Text color="blackAlpha.600" fontSize="sm">
                          4
                        </Text>
                        <Icon as={RiStarSFill} color="#00000040" />
                      </Stack>
                    </Stack>
                    <Stack
                      alignItems="center"
                      direction="row"
                      heigth="4px"
                      spacing={4}
                      width="100%"
                    >
                      <Text
                        as="span"
                        backgroundColor="#0000001a"
                        borderRadius="4"
                        height="4px"
                        width="100%"
                      />
                      <Stack alignItems="center" direction="row" spacing={1}>
                        <Text color="blackAlpha.600" fontSize="sm">
                          3
                        </Text>
                        <Icon as={RiStarSFill} color="#00000040" />
                      </Stack>
                    </Stack>
                    <Stack
                      alignItems="center"
                      direction="row"
                      heigth="4px"
                      spacing={4}
                      width="100%"
                    >
                      <Text
                        as="span"
                        backgroundColor="#0000001a"
                        borderRadius="4"
                        height="4px"
                        width="100%"
                      />
                      <Stack alignItems="center" direction="row" spacing={1}>
                        <Text color="blackAlpha.600" fontSize="sm">
                          2
                        </Text>
                        <Icon as={RiStarSFill} color="#00000040" />
                      </Stack>
                    </Stack>
                    <Stack
                      alignItems="center"
                      direction="row"
                      heigth="4px"
                      spacing={4}
                      width="100%"
                    >
                      <Text
                        as="span"
                        backgroundColor="#0000001a"
                        borderRadius="4"
                        height="4px"
                        width="100%"
                      />
                      <Stack alignItems="center" direction="row" spacing={1}>
                        <Text color="blackAlpha.600" fontSize="sm">
                          1
                        </Text>
                        <Icon as={RiStarSFill} color="#00000040" />
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack>
                    <Stack direction="row">
                      <Link
                        backgroundColor="purple.50"
                        borderRadius="full"
                        height="8"
                        opacity="1"
                        px="4"
                        py="1"
                      >
                        <Text as="b" color="#548BFA" fontSize="sm">
                          Ordenar
                          <Icon as={BsChevronDown} mx="10px" />
                        </Text>
                      </Link>
                      <Link
                        backgroundColor="purple.50"
                        borderRadius="full"
                        height="8"
                        opacity="1"
                        px="4"
                        py="1"
                      >
                        <Text as="b" color="#548BFA" fontSize="sm">
                          Calificación
                          <Icon as={BsChevronDown} mx="10px" />
                        </Text>
                      </Link>
                    </Stack>
                    <Stack>
                      <Text as="b" my={2}>
                        Opiniones destacadas
                      </Text>
                      <Stack spacing={2}>
                        <Stack alignItems="center" direction="row" justifyContent="space-between">
                          <Stack direction="row" spacing={0}>
                            <Icon as={RiStarSFill} color="#3483FA" height="8" width="4" />
                            <Icon as={RiStarSFill} color="#3483FA" height="8" width="4" />
                            <Icon as={RiStarSFill} color="#3483FA" height="8" width="4" />
                            <Icon as={RiStarSFill} color="#3483FA" height="8" width="4" />
                            <Icon as={RiStarSFill} color="#3483FA" height="8" width="4" />
                          </Stack>
                          <Text>16/01/23</Text>
                        </Stack>
                        <Text>Muy buena la calidad y el producto en general</Text>
                        <Stack direction="row">
                          <Stack
                            alignItems="center"
                            backgroundColor="transparent"
                            border="1px solid #00000040"
                            borderRadius="full"
                            color="blackAlpha.700"
                            direction="row"
                            height="30px"
                            padding="3"
                          >
                            <Text fontSize="xs">Es útil</Text>
                            <Image height="19px" objectFit="contain" src={thumbUp} width="19px" />
                            <Text fontSize="xs">0</Text>
                          </Stack>
                          <Stack
                            alignItems="center"
                            backgroundColor="transparent"
                            border="1px solid #00000040"
                            borderRadius="full"
                            color="blackAlpha.700"
                            direction="row"
                            height="30px"
                            padding="1"
                          >
                            <Image height="19px" objectFit="contain" src={thumbDown} width="19px" />
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                    <Link fontSize="sm" height="60px" my="6" py="20px">
                      Mostrar todas las opiniones
                    </Link>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column" spacing={4}>
              {/* Informacion del producto*/}
              <Stack
                border="1px"
                borderColor="blackAlpha.300"
                borderRadius="md"
                direction="column"
                padding="4"
                paddingBottom="10"
                width="350px"
              >
                <Stack direction="row" height="auto">
                  <Text color="blackAlpha.700" fontSize="sm">
                    Nuevo
                  </Text>
                  <Divider borderColor="blackAlpha.700" orientation="vertical" type="blackAlpha" />
                  <Text color="blackAlpha.700" fontSize="sm">
                    3 vendidos
                  </Text>
                </Stack>
                <Text as="b" fontSize="22px">
                  {product.title}
                </Text>
                <Stack alignItems="center" direction="row" spacing={0}>
                  <Text color="blackAlpha.700" fontSize="sm" mx="1">
                    5.0
                  </Text>
                  <Icon as={RiStarSFill} color="#3483FA" height="8" width="5" />
                  <Icon as={RiStarSFill} color="#3483FA" height="8" width="5" />
                  <Icon as={RiStarSFill} color="#3483FA" height="8" width="5" />
                  <Icon as={RiStarSFill} color="#3483FA" height="8" width="5" />
                  <Icon as={RiStarSFill} color="#3483FA" height="8" width="5" />
                  <Text color="blackAlpha.700" fontSize="sm" mx="1">
                    (1)
                  </Text>
                </Stack>
                <Stack direction="column" spacing={0}>
                  <Text color="blackAlpha.800" fontSize="4xl" fontWeight="300">
                    $ {product.price}
                  </Text>
                  <Text color="blackAlpha.800" fontSize="lg" fontWeight="300" m="0">
                    Paga en cuotas
                  </Text>
                </Stack>
                <Link fontSize="sm" href="">
                  Ver los medios de pago
                </Link>
                <Stack
                  alignItems="center"
                  backgroundColor="#0000000a"
                  direction="row"
                  height="auto"
                  m={0}
                >
                  <Divider
                    borderColor="tomato"
                    borderRadius="6px 0 0 6px"
                    borderWidth="0 2px"
                    color={"#FF6347"}
                    height="50px"
                    opacity=".9"
                    orientation="vertical"
                  />
                  <Icon as={IoMdAlert} color="tomato" height="5" width="5" />
                  <Text>Publicacion pausada</Text>
                </Stack>
              </Stack>
              {/* Informacion del vendedor*/}
              <Stack
                border="1px"
                borderColor="blackAlpha.300"
                borderRadius="md"
                direction="column"
                padding="2"
                paddingBottom="7"
                width="350px"
              >
                <Text fontSize="lg" my="4">
                  Informacion sobre el vendedor
                </Text>
                <Stack align="flex-start" direction="row">
                  <Image height="5" src={medal} width="5" />
                  <Stack direction="column" spacing={0}>
                    <Text color="green.500" lineHeight={1}>
                      MercadoLíder Platinum
                    </Text>
                    <Text color="blackAlpha.600" fontSize="sm">
                      ¡Es uno de los mejores del sitio!
                    </Text>
                  </Stack>
                </Stack>
                <Stack alignItems="center" justifyContent="center" width="100%">
                  <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="center"
                    my="2"
                    spacing={1}
                    width="90%"
                  >
                    <Box backgroundColor="#fff0f0" height="8px" width="64px" />
                    <Box backgroundColor="#fff5e8" height="8px" width="64px" />
                    <Box backgroundColor="#fffcda" height="8px" width="64px" />
                    <Box backgroundColor="#f1fdd7" height="8px" width="64px" />
                    <Box backgroundColor="#39b54a" height="12px" mr={0} pr={0} width="64px" />
                  </Stack>
                </Stack>
                <Stack direction="row">
                  <Stack direction="column" height="72px" width="30%">
                    <Text fontSize="2xl" lineHeight="1" textAlign="center">
                      +5mil
                    </Text>
                    <Text fontSize="xs" lineHeight="1" textAlign="center">
                      Ventas concretadas
                    </Text>
                  </Stack>
                  <Stack alignItems="center" direction="column" height="72px" width="30%">
                    <Image height="23px" src={message} width="28px" />
                    <Text fontSize="xs" lineHeight="1" textAlign="center">
                      Brinda buena atencion
                    </Text>
                  </Stack>
                  <Stack alignItems="center" direction="column" height="72px" width="30%">
                    <Image height="23px" src={time} width="28px" />
                    <Text fontSize="xs" lineHeight="1" textAlign="center">
                      Despacha sus productos a tiempo
                    </Text>
                  </Stack>
                </Stack>
                <Link fontSize="sm">Ver mas publicaciones del vendedor</Link>
              </Stack>
              <Divider borderColor="blackAlpha.500" borderWidth="1px" />
              <Stack
                alignItems="center"
                backgroundColor="blackAlpha.50"
                borderRadius="8"
                direction="column"
                paddingBottom={0}
                paddingTop={6}
                spacing="0"
              >
                <Text as="b" m="0">
                  Comprá en tiendas fuera de Mercado Libre
                </Text>
                {/*Componentes de productos fuera de MeLi*/}
                <Grid gap={2} paddingX="4" paddingY="2" templateColumns="repeat(2, 1fr)">
                  <Stack backgroundColor="white" borderBottomRadius="8" spacing="0" width="157px">
                    <Box
                      alignItems="center"
                      backgroundColor="pink.500"
                      borderTopRadius="8"
                      display="flex"
                      height="8"
                      justifyContent="center"
                      width="auto"
                    >
                      <Text color="white" textAlign="center">
                        @todoPeluches
                      </Text>
                    </Box>
                    <Image src={jolteon} width="100%" />
                    <Divider
                      borderColor="blackAlpha.200"
                      borderWidth=".2px"
                      orientation="horizontal"
                    />
                    <Stack padding="2" spacing="2">
                      <Text fontSize="xs">Peluche Pokemon Jolteon</Text>
                      <Text fontSize="xs">$36000</Text>
                      <Text fontSize="10px">6 x $6000</Text>
                    </Stack>
                  </Stack>
                  <Stack backgroundColor="white" borderBottomRadius="8" spacing="0" width="157px">
                    <Box
                      alignItems="center"
                      backgroundColor="pink.500"
                      borderTopRadius="8"
                      display="flex"
                      height="8"
                      justifyContent="center"
                      width="auto"
                    >
                      <Text color="white" textAlign="center">
                        @PokePeluches
                      </Text>
                    </Box>
                    <Image src={hunter} width="100%" />
                    <Divider
                      borderColor="blackAlpha.200"
                      borderWidth=".2px"
                      orientation="horizontal"
                    />
                    <Stack padding="2" spacing="2">
                      <Text fontSize="xs">Hunter - Peluche mediano</Text>
                      <Text fontSize="xs">$35000</Text>
                      <Text fontSize="10px">7 x $5000</Text>
                    </Stack>
                  </Stack>
                  <Stack backgroundColor="white" borderBottomRadius="8" spacing="0" width="157px">
                    <Box
                      alignItems="center"
                      backgroundColor="pink.500"
                      borderTopRadius="8"
                      display="flex"
                      height="8"
                      justifyContent="center"
                      width="auto"
                    >
                      <Text color="white" textAlign="center">
                        @PuebloPaleta
                      </Text>
                    </Box>
                    <Image src={mewtwo} width="100%" />
                    <Divider
                      borderColor="blackAlpha.200"
                      borderWidth=".2px"
                      orientation="horizontal"
                    />
                    <Stack padding="2" spacing="2">
                      <Text fontSize="xs">Mewtwo Peluche Pokemon</Text>
                      <Text fontSize="xs">$40000</Text>
                      <Text fontSize="10px">5 x $8250</Text>
                    </Stack>
                  </Stack>
                  <Stack backgroundColor="white" borderBottomRadius="8" spacing="0" width="157px">
                    <Box
                      alignItems="center"
                      backgroundColor="pink.500"
                      borderTopRadius="8"
                      display="flex"
                      height="8"
                      justifyContent="center"
                      width="auto"
                    >
                      <Text color="white" textAlign="center">
                        @LigaPokemon
                      </Text>
                    </Box>
                    <Image src={eveeWhite} width="100%" />
                    <Divider
                      borderColor="blackAlpha.200"
                      borderWidth=".2px"
                      orientation="horizontal"
                    />
                    <Stack padding="2" spacing="2">
                      <Text fontSize="xs">Vulpix Shiny Exclusivo</Text>
                      <Text fontSize="xs">$50000</Text>
                      <Text fontSize="10px">5 x $1300</Text>
                    </Stack>
                  </Stack>
                </Grid>
                {/*Componentes de productos fuera de MeLi*/}
                <Link padding="4">
                  <Text fontSize="xs">Creá tu Mercado Shop</Text>
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Container>
      <Text backgroundColor="yellow.300">
        @Disclaimer: Esta pagina es un desafio, no tiene ninguna relacion con la empresa de Mercado
        Libre, ni es un intento de estafa mediante Phishing
      </Text>
    </>
  );
};

export default DetailsScreen;
