import React, { useState } from 'react'
import { FaEdit,FaTrash } from "react-icons/fa";
import './Todo.css';

export const Todo = ({item,filterDel,setIsEdit,setItemId,setUpdateVal}) => {
    const [completed, setCompleted] = useState(false);

    function handleDelete(id){
        filterDel(id)
    }
    function handleEdit(id,value){
        setIsEdit(false)
        setItemId(id)
        setUpdateVal(value)
    }
  return (
    <div className="item">
        <p className='item-name'>
            <input type='checkbox' onChange={()=>{
                setCompleted(!completed)
            }}/><span className={completed ? 'strike-through' :"" }>{item.input}</span>
        </p>
        <p>
            <button className='todo-item-edit' onClick={()=>{
                handleEdit(item.id,item.input)
            }}><FaEdit /></button>
            <button className='todo-item-delete' onClick={()=>{
                handleDelete(item.id)
            }}><FaTrash /></button>
        </p>
    </div>
  )
}
