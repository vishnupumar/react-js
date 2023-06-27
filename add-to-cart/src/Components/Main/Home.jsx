import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Box height={"90vh"}>
      <Image
        position={"relative"}
        height={"92vh"}
        width={"100%"}
        src="https://cdn.wallpapersafari.com/15/19/eoW5QF.jpg"
        alt="background"
      />
      <Flex
        flexDirection={"column"}
        align={"center"}
        justify={"center"}
        position={"absolute"}
        top={"50%"}
        left={"0"}
        right={"0"}
      >
        <Text
          textShadow={"1px 1px 0px #000"}
          mb={"10px"}
          p={"5px"}
          fontSize={"4xl"}
          color={"#fff"}
          fontWeight={"600"}
        >
          Welcome To Products Cart
        </Text>
        <Button
        textShadow={"1px 1px 0px #000"}
        _hover={{ color: "#000" }}
          onClick={() => {
            navigate("/products");
          }}
          variant={"outline"}
          color={"#fff"}
        >
          View Our Products
        </Button>
      </Flex>
    </Box>
  );
};
