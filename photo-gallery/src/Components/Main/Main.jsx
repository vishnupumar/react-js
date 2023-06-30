import { Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { myContext } from "../ContextApi/myContext";

export const Main = () => {
  const { images, pageNum, setPageNum } = useContext(myContext);

  return (
    <Box>
      <Flex flexWrap={"wrap"} justify={"center"}>
        {images?.results?.map((ele,idx) => {
          return (
            <Card key={idx}
              height={{ base: `${ele.height / 15}`, md: `${ele.height / 15}` }}
              m={{ base: "5px", sm: "8px", md: "15px" }}
              _hover={{ boxShadow: "dark-lg" }}
            >
              <Image
                height={{
                  base: `${ele.height / 15}`,
                  md: `${ele.height / 15}`,
                }}
                width={{ base: `${ele.width / 15}`, md: `${ele.width / 15}` }}
                src={ele.urls.regular}
                alt="#"
              />
              <Box
                position={"absolute"}
                top={"0"}
                height={{
                  base: `${ele.height / 15}`,
                  md: `${ele.height / 15}`,
                }}
                width={{ base: `${ele.width / 15}`, md: `${ele.width / 15}` }}
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
      </Flex>
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
