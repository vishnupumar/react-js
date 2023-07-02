import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const Products = () => {
    const data = useSelector((storeData) => {
        return storeData;
      });
  return (
    <Box
      height={"91vh"}
      textAlign={"center"}
      padding={"20px"}
      backgroundColor={data.themeMode === "dark" ? "#3a3b3f" : "#fff"}
      color={data.themeMode === "dark" ? "#fff" : "#3a3b3f"}
    >
      <Text fontSize={"3xl"}>Our service are not available</Text>
      <Text>you can mail me at Lorem@mail.com</Text>
    </Box>
  );
};
