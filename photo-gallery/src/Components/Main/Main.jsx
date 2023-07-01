import { Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { myContext } from "../ContextApi/myContext";
import './Main.css';

export const Main = () => {
  const { images, pageNum, setPageNum } = useContext(myContext);

  return (
    <Box>
      <Box className="all-photos" m={"10px"} >
        {images?.results?.map((ele,idx) => {
          return (
            <Card key={idx}
              height={"100%"}
              width={"100%"}
              mb={"10px"}
              _hover={{ boxShadow: "dark-lg" }}
            >
              <Image
                height={"100%"}
                
                width={"100%"}
                src={ele.urls.regular}
                alt="#"
              />
              <Box
                position={"absolute"}
                _hover={{filter:"opacity(0.1)"}}
                top={"0"}
                height={"100%"}
                width={"100%"}
                bg={"blackAlpha.500"}
              ></Box>
              <Text m={"10px"} position={"absolute"} top={"2"} color={"#fff"}>
                {ele?.user?.username}
              </Text>
              <Text m={"10px"} position={"absolute"} top={"7"} fontSize={"sm"} color={"#fff"}>
                {ele?.user?.updated_at}
              </Text>
            </Card>
          );
        })}
      </Box>
      <Flex justify={"center"} m={{ base: "10px", md: "20px" }}>
        {pageNum === 1 ? (
          <Button isDisabled>Prev</Button>
        ) : (
          <Button
            onClick={() => {
              setPageNum(pageNum - 1);
            }}
          >
            Prev
          </Button>
        )}
        <Button>{pageNum}</Button>
        {pageNum < images?.total_pages ? (
          <Button
            onClick={() => {
              if (pageNum <= images?.total_pages) {
                setPageNum(pageNum + 1);
              }
            }}
          >
            Next
          </Button>
        ) : (
          <Button isDisabled>Next</Button>
        )}
      </Flex>
    </Box>
  );
};
