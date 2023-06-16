import React from "react";
import { Card, Stack, Image, Heading, Text, CardBody, Flex } from "@chakra-ui/react";

export const ProductItem = ({ item }) => {
  return (
    <Card maxW="xs" 
          m="10px" 
          height={400}
          width={250}>
      <CardBody>
        <Image
          src={item.image}
          alt={item.title}
          borderRadius="md"
          height={150}
          width={150}
          m="0 auto"
        />
        <Stack mt="6" spacing="3" height="140px">
          <Heading size="sm">{item.title.slice(0,40)}</Heading>
          <Text>
            {item.description.slice(0,80)}
          </Text>
        </Stack>
        
          <Text color="blue.600" fontSize="2xl">
           ₹ {item.price}
          </Text>
        
      </CardBody>
    </Card>
  );
};
