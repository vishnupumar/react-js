import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { myContext } from "../context/contextApi";
import { CartItem } from "./CartItem";

export const Cart = ()=>{
    const {state} = useContext(myContext);

    return <Flex flexDirection={"column"} justify={"center"} align={"center"}>
        {
            state.cart.map((ele,idx)=>{
                return <CartItem ele={ele} key={idx}/>
            })
        }
        <Box p={"0px 0 30px 0"}>
            <Text>Total : ₹ 
        {
            state.cart.reduce((total,curr)=>{
                return total+curr.price*100*curr.quantity
            },0)
        }</Text>
            
        </Box>
    </Flex>
}