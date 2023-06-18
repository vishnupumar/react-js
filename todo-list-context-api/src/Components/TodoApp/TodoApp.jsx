import { Box } from '@chakra-ui/react'
import React from 'react'
import { Header } from '../Header/Header'
import { TodosLogic } from '../TodosLogic/TodosLogic'

export const TodoApp = () => {
  return (
    <Box w="400px" mt="40px" height="550px" overflow="scroll" boxShadow="0 0 10px #000" p="10px" backgroundColor="#f2f2f2">
        <Header />
        <TodosLogic />
    </Box>
  )
}
