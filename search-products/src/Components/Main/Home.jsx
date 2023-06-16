import React, { useContext, useState } from "react";
import { ProductItem } from "./ProductItem";
import { Flex } from "@chakra-ui/react";
import { myContext } from "../ContextApi/Context";

export const Home = () => {
  const { state } = useContext(myContext);

  return (
    <Flex 
    bg="#f2f2a3"
    flexWrap="wrap" 
    justifyContent="center" alignItems="center">
      {state.map((res, idx) => {
        return <ProductItem key={idx} item={res} />;
      })}
    </Flex>
  );
};
