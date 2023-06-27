import { Flex } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { myContext } from "../context/contextApi";
import { Product } from "./Product";

export const Products = () => {
  const { fetchProducts, state } = useContext(myContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Flex flexWrap={"wrap"} justify={"center"} align={"center"}>
      {state?.allProducts?.map((ele,idx) => {
        return (
          <Product key={idx} ele={ele} />
        );
      })}
    </Flex>
  );
};
