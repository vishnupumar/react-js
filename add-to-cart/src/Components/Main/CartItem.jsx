import { Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { myContext } from "../context/contextApi";

export const CartItem = ({ele})=>{
    const {increaseCart, decreaseCart,removeItem} = useContext(myContext)

    return <Card
    m={{ base: "2px", sm: "5px", md: "10px" }}
    p={{ base: "2px", sm: "5px", md: "10px" }}
    width={{ base: "100%", md: "80%" }}
    boxShadow={"dark-lg"}
  >
  <Flex flexWrap={"wrap"} align={"center"} justify={"space-evenly"}>
    <Image
      height={{ base: "50px", md: "80px" }}
      width={{ base: "50px", md: "80px" }}
      src={ele.image}
      alt="products"
    />
    <Box textAlign={"center"} p={{ base: "5px", sm: "10px", md: "12px" }}>
      <Text color={"gray.400"} fontSize={"xs"}>
        {ele.category}
      </Text>
      <Text width={{base:"80px",md:"100px"}} height={{base:"50px",md:"70px"}} overflow={"hidden"}>
        {ele.title}
      </Text>
      <Text color={"gray.500"}>₹ {ele.price * 100}</Text>
    </Box>
    <Box textAlign={"center"} p={{ base: "5px", sm: "8px", md: "12px" }}>
        <Button
          p={{ base: "5px", sm: "8px", md: "12px" }}
          colorScheme={"blue"}
          size={"xs"}
          onClick={() => {
            removeItem(ele.id)
          }}
        >
          Remove
        </Button>
    </Box>
    <Box p={{ base: "5px", sm: "5px", md: "12px" }}>
          <Button colorScheme={"teal"}
          size={"xs"}
          onClick={()=>{
            decreaseCart(ele.id)
          }}
          >-</Button>
          <Button variant={"ghost"}
          size={"xs"}>{ele.quantity}</Button>
          <Button colorScheme={"pink"}
          size={"xs"}
          onClick={()=>{
            increaseCart(ele.id)
          }}
          >+</Button>
        </Box>
        </Flex>
  </Card>
}