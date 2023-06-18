import { Box } from '@chakra-ui/react'
import React from 'react'
import { InputTodo } from '../InputTodo/InputTodo'
import { TodosList } from '../TodosList/TodosList'

export const TodosLogic = () => {
  return (
    <Box>
        <InputTodo />
        <TodosList />
    </Box>
  )
}
