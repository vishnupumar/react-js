import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { myContext } from "../context/contextApi";

export const Navbar = () => {
  const {state} = useContext(myContext);

  return (
    <Flex justify={"space-around"} align={"center"} flexWrap={"wrap"} borderBottom={"1px solid #d3cfcf"}>
      <Box>
        <Text
          fontSize={{ base: "1xl",sm:"2xl", md: "3xl" }}
          fontWeight={"600"}
          color={"blue.500"}
          ml={{base:"10px",md:"30px"}}
          p={"5px"}
        >
          Products Cart
        </Text>
      </Box>
      <Flex justify={"space-evenly"} flexDirection={{base:"column",sm:"row"}}>
       <Box mr={"30px"}>
            <NavLink to={"/"} style={({isActive})=>({
              color : isActive ? "black":"gray",
              fontWeight: isActive ? "600" : "400",
            })}>Home</NavLink>
       </Box>
        <Box mr={"30px"}>
        <NavLink to={"/products"} style={({isActive})=>({
              color : isActive ? "black":"gray",
              fontWeight: isActive ? "600" : "400",
            })}>Products</NavLink>
        </Box>
        <Box mr={"30px"}>
        <NavLink to={"/cart"} style={({isActive})=>({
              color : isActive ? "black":"gray",
              fontWeight: isActive ? "600" : "400",
            })}>Cart
            <span color={"purple"} style={{
              color:"blue"
            }}>&nbsp;
              {
                state.cart.length
              }
            </span>
            </NavLink>
            
        </Box>
      </Flex>
    </Flex>
  );
};
