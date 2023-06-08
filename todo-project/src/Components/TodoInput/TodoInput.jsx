import React, { useState } from 'react'
import './TodoInput.css';

export const TodoInput = ({list,setList,updateVal, setUpdateVal, isEdit, updateList}) => {
    const [input, setInput] = useState("");

    function handleAdd(){
        if(input.trim() !== ""){
            setList([...list,
                {
                    id:Date.now(),
                    input :input
                }]
            )
            setInput('');
        }else{
            alert("Please Enter Something...")
        }
    }
    function handleUpdate(){

        if(updateVal.trim() !== ""){
            updateList()
            setUpdateVal('')
        }else{
            alert("Please Update Something...")
        }
    }

  return (
    <div className='todo-input'>
        <input type='text' placeholder={isEdit ? 'Enter todos...' : "Update todo..." }  value={isEdit ? input : updateVal} onChange={(e)=>{
            isEdit ? setInput(e.target.value) : setUpdateVal(e.target.value)
        }}/>
        <button onClick={isEdit ? handleAdd : handleUpdate } >{isEdit ? "Add" : "Update"}</button>
    </div>
  )
}
