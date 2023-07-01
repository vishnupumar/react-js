import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../ContextApi/myContext";

export const Navbar=()=>{
    const [inputVal, setInputVal] = useState("")

    const {searched,setSearched,pageNum,setPageNum,fetchImages} = useContext(myContext);

    useEffect(()=>{
        fetchImages();
    },[searched,pageNum])

    return <Box bg={"gray.300"} p={{base:"5px",md:"10px"}}>
        <Flex justify={"space-between"} align={"center"} flexWrap={"wrap"}>
            <Box ml={{base:"10px",md:"50px"}}>
                <Text fontSize={{base:"2xl",md:"3xl"}} fontWeight={"500"} color={"blue"}>Photo Gallery</Text>
            </Box>
            <Flex mr={{base:"10px",md:"50px"}} align={"center"}>
                <Input bg={"#fff"} onChange={(e)=>{
                    setInputVal(e.target.value)
                }} placeholder="Search images..." />
                <Button colorScheme="blue" onClick={()=>{
                    setSearched(inputVal)
                    setPageNum(1);
                }}>Search</Button>
            </Flex>
        </Flex>
    </Box>
}