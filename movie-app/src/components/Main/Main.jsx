import { Box, Button, Card, Center, Flex, Image, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { myContext } from "../ContextApi/Context";
import { Link } from "react-router-dom";

export const Main = () => {
  const { moviesData, fetchWithPages, pagination, setPagination } = useContext(myContext);
  
  let noOfPages = 1;
  if (moviesData.totalResults > 10) {
    noOfPages = Math.ceil(moviesData.totalResults / 10);
    console.log(noOfPages);
  }

  return (
    <Box backgroundColor={"#3d3d3d"}>
      <Flex flexWrap={"wrap"} alignItems={"center"} justifyContent={"center"}>
        
          {
            moviesData?.Response === "True" &&
            moviesData.Search.map((ele,idx)=>{
            return <Link key={idx} to={`/movie-details/${ele.imdbID}`}>
              <Card m={"10px"} bg={"#3d3d3d"} width={"180px"} height={"330px"} border={"1px solid grey"} borderRadius={"10px"}>
                <Image
                  borderRadius={"10px"}
                  width={"100%"}
                  height={"230px"}
                  src={ele.Poster}
                  alt={ele.Type}
                />
                <Text p={"5px"} height={"50px"} overflow={"hidden"} color={"lightcyan"}>{ele.Title}</Text>
                <Text p={"5px"} color={"GrayText"}>{ele.Year}</Text>
              </Card>
            </Link>
          })
          }
      </Flex>
        {
          moviesData?.Response === "True" && 
        <Box>
        <Center>
          <Button
            size={"sm"}
            display={pagination === 1 ? "none" : "block"}
            variant={"outline"}
            color={"ButtonText"}
            onClick={() => {
              const page = pagination - 1; 
              setPagination(page);
              fetchWithPages(page)
            }}
          >
            Prev
          </Button>
          <Button variant={"ghost"}>{pagination}</Button>
          <Button
            size={"sm"}
            display={pagination === noOfPages ? "none" : "block"}
            variant={"outline"}
            color={"ButtonText"}
            onClick={() => {
              const page = pagination + 1;
              setPagination(page);
              fetchWithPages(page)
            }}
          >
            Next
          </Button>
        </Center>
      </Box>
      }
      
    </Box>
  );
};
