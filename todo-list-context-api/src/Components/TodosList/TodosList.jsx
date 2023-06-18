import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { myContext } from "../ContextApi/ContextApi";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodosList = () => {
  const { todoState } = useContext(myContext);

  return (
    <Box>
      {todoState.map((ele,idx) => {
        return <TodoItem key={idx} item={ele} />;
      })}
    </Box>
  );
};
