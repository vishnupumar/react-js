import React, { useContext, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { myContext } from "../context/contextApi";

export const Main = () => {
  const { fetchNewsFrequently, state, pageNum, setPageNum } =
    useContext(myContext);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchNewsFrequently();
    }, 10 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [pageNum]);

  useEffect(() => {
    fetchNewsFrequently();
  }, [pageNum]);

  return (
    <Box>
      <TableContainer>
        {state?.hits?.length > 0 && (
          <Table variant="striped" colorScheme="green">
            <Thead>
              <Tr>
                <Th>HEADLINES</Th>
                <Th isNumeric>CREATED AT</Th>
                <Th>AUTHOR</Th>
              </Tr>
            </Thead>
            <Tbody>
              {state.hits.map((ele, idx) => {
                return (
                  <Tr key={idx}>
                    <Td>
                      {ele.title}{" "}
                      <Link color="blue" href={ele.url} target="_blank">
                        read more...
                      </Link>
                    </Td>
                    <Td isNumeric>
                      {ele.created_at.slice(0, 10)}{" "}
                      {ele.created_at.slice(11, 16)}
                    </Td>
                    <Td>{ele.author}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        )}
      </TableContainer>
      <Flex justifyContent={"center"} alignItems={"center"} m={"20px"}>
        <Button
          variant={"link"}
          display={pageNum === 0 ? "none" : "block"}
          onClick={() => {
            const pageCount = pageNum - 1;
            setPageNum(pageCount);
          }}
        >
          Prev
        </Button>
        &nbsp;&nbsp;
        <Button>{pageNum}</Button>&nbsp;&nbsp;
        <Button
          variant={"link"}
          display={pageNum === state?.nbPages - 1 ? "none" : "block"}
          onClick={() => {
            const pageCount = pageNum + 1;
            setPageNum(pageCount);
          }}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};
