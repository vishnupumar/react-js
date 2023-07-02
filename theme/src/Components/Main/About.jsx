import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const About = () => {
    const data = useSelector((storeData) => {
        return storeData;
      });
  return (
    <Box
      height={"92vh"}
      textAlign={"center"}
      padding={"20px"}
      backgroundColor={data.themeMode === "dark" ? "#3a3b3f" : "#fff"}
      color={data.themeMode === "dark" ? "#fff" : "#3a3b3f"}
    >
      <Text fontSize={"3xl"}>Our service are not available</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae quas
        aliquid necessitatibus eius voluptate expedita, sed esse, minus officia
        recusandae illo hic commodi aliquam officiis culpa sit, modi asperiores?
      </Text>
    </Box>
  );
};
