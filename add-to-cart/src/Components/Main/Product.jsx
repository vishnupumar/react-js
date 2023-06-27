import { Box, Button, Card, Image, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { myContext } from "../context/contextApi";

export const Product = ({ ele }) => {
  const { addtoCart,state } = useContext(myContext);
//   const [inCart, setInCart] = useState(false);


  return (
    <Card
      m={{ base: "5px", sm: "10px", md: "20px" }}
      p={{ base: "5px", sm: "10px", md: "12px" }}
      width={{ base: "120px", md: "170px" }}
    >
      <Image
        height={{ base: "150px", md: "180px" }}
        width={{ base: "120px", md: "170px" }}
        src={ele.image}
        alt="products"
      />
      <Box textAlign={"center"} p={{ base: "5px", sm: "10px", md: "12px" }}>
        <Text color={"gray.400"} fontSize={"xs"}>
          {ele.category}
        </Text>
        <Text height={"50px"} overflow={"hidden"}>
          {ele.title}
        </Text>
        <Text color={"gray.500"}>₹ {ele.price * 100}</Text>
      </Box>
      <Box textAlign={"center"} p={{ base: "5px", sm: "8px", md: "12px" }}>
        {/* {inCart ? (
          <Box p={{ base: "5px", sm: "5px", md: "12px" }}>
            <Button colorScheme={"teal"}
            size={"xs"}
            >-</Button>
            <Button variant={"ghost"}
            size={"xs"}>{}</Button>
            <Button colorScheme={"pink"}
            size={"xs"}
            >+</Button>
          </Box>
        ) : ( */}
          <Button
            p={{ base: "5px", sm: "8px", md: "12px" }}
            colorScheme={"blue"}
            size={"xs"}
            onClick={() => {
              addtoCart(ele, 1);
            //   setInCart(true);
            }}
          >
            Add to Cart
          </Button>
        {/* )} */}
      </Box>
    </Card>
  );
};
