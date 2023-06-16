import {
  Box,
  Container,
  Flex,
  Input,
  Text,
  IconButton,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { myContext } from "../ContextApi/Context";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { searchData } = useContext(myContext);

  return (
    <Flex
      bg="rgb(78 179 147)"
      p="5px"
      justifyContent="space-around"
      alignItems="center"
    >
      <Box>
        <Text
          fontSize="2xl"
          bgClip="text"
          bgGradient="linear(90deg, #7928CA, #FF0080)"
        >
          Filter Me
        </Text>
      </Box>
      <Box>
        <Button><Link to="/">Home</Link></Button>
      </Box>
      <Box>
        <Button><Link to="/about">Unmount Products</Link></Button>
      </Box>
      <Box>
        <InputGroup
          placeholder="Search Products"
          bg="#b2cccc"
          borderRadius="5px"
        >
          <Input
            placeholder="Search Products"
            color="#000"
            onChange={(e) => {
              const lowerCaseVal = e.target.value.toLowerCase();
              searchData(lowerCaseVal);
            }}
          />
          <IconButton aria-label="Search database" icon={<FaSearch />} />
        </InputGroup>
      </Box>
    </Flex>
  );
};
