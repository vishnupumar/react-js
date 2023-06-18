import { Button, Flex, Input } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { myContext } from '../ContextApi/ContextApi';

export const InputTodo = () => {
    const { addTodo,inputState, setInputState,edit,updateTodo } = useContext(myContext);

  return (
    <Flex>
        <Input placeholder={edit ? "UpdateTodo...":'Enter Todos...'} value={inputState} onChange={(e)=>{
            setInputState(e.target.value)
        }}/>
        &nbsp;
        <Button bgColor="tomato" color="#fff" onClick={()=>{
          if(inputState !== ""){
            if(edit){
              updateTodo(inputState)
            }else{
              addTodo(inputState);
            }
            setInputState("");
          }else{
            alert("Please enter something...")
          }
        }}>+</Button>
    </Flex>
  )
}
