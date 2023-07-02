import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const dispatch = useDispatch();
  const data = useSelector((storeData) => {
    return storeData;
  });
  const handleDark = () => {
    dispatch({
      type: "dark",
    });
  };
  const handleLight = () => {
    dispatch({
      type: "light",
    });
  };
  return (
    <Box
      borderBottom={"1px solid #8b8c91"}
      background={data.themeMode === "dark" ? "#27282b" : "#babfcc"}
      color={data.themeMode === "dark" ? "#fff" : "#27282b"}
    >
      <Flex
        flexWrap={"wrap"}
        p={"5px"}
        justify={"space-around"}
        align={"center"}
      >
        <Box>
          <Text fontSize={"3xl"}>Theme</Text>
        </Box>
        <Button
          size={"sm"}
          onClick={data.themeMode === "dark" ? handleLight : handleDark}
          backgroundColor={data.themeMode === "dark" ? "" : "#27282b"}
          color={data.themeMode === "dark" ? "#27282b" : "#fff"}
          _hover={{
            backgroundColor:`${data.themeMode === "dark" ? "" : "#fff"}`,
            color:`${data.themeMode === "dark" ? "" : "#27282b"}`
          }}
        >
          Toggle Theme to {data.themeMode === "dark" ? "Light" : "Dark"}{" "}
        </Button>
        <Flex>
          <Box mr={{ base: "20px", md: "50px" }}>
            <Link to={"/"}>Home</Link>
          </Box>
          <Box mr={{ base: "20px", md: "50px" }}>
            <Link to={"/contact"}>Contact</Link>
          </Box>
          <Box mr={{ base: "20px", md: "50px" }}>
            <Link to={"/about"}>About</Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
