import { Checkbox, Flex, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { myContext } from '../ContextApi/ContextApi'
import { FaEdit, FaTrash } from "react-icons/fa"

export const TodoItem = ({item}) => {
    const [completed, setCompleted] =useState(false);
    const { deleteTodo,editMode } = useContext(myContext);

  return (
    <Flex p="5px" border="1px solid #b3b3b3" m="5px" borderRadius="10px" justifyContent="space-between" alignItems="center">
        <Flex>
            <Checkbox mr="10px" onChange={(e)=>{
                if(e.target.checked){
                    setCompleted(true);
                }else{
                    setCompleted(false)
                }
            }} />
            <Text textDecoration={ completed ?"line-through" : ""} >{item.task}</Text>
        </Flex>
        <Flex w="15%" justifyContent="space-around">
            <FaEdit cursor="pointer" color="purple" onClick={()=>{
                editMode(item)
            }} />
            <FaTrash cursor="pointer" color="tomato" onClick={()=>{
                deleteTodo(item.id)
            }} />
        </Flex>
    </Flex>
  )
}
