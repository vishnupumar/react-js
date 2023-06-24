import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { myContext } from "../ContextApi/Context";
import { useNavigate } from "react-router-dom";

export const Navbar = ()=>{
    const [search, setSearch] = useState("");
    const { fetchMovies,setSearchedMovie } = useContext(myContext);
    const navigate = useNavigate();

    return <Box>
        <Flex justifyContent={"space-around"}  p={"5px"} alignItems={"center"}>
            <Text fontSize={{sm:"1xl",md:"3xl"}} fontWeight={"700"} color={"lightsalmon"}  textShadow={"1px 1px 1px rgb(165, 37, 69)"} >Moviez Rating</Text>
            <Box>
                <Flex>
                    <Input color={"#fff"} width={{base:"150px",md:"500px"}} size={"sm"} placeholder="Search movies..." onChange={(e)=>{
                        setSearch(e.target.value)
                    }} />
                <Button onClick={()=>{
                    setSearchedMovie(search)
                    fetchMovies(search)
                    navigate("/")
                }} size={"sm"} pr={"18px"} borderRadius={"0 50% 50% 0"} background={"transparent"} border={"1px solid gray"} color={"AppWorkspace"} _hover={{color:"grey"}}><FaSearch /> </Button>
                </Flex>
            </Box>
        </Flex>
        <hr />
    </Box>
}
