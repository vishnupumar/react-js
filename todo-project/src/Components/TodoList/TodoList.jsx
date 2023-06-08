import React, { useState } from "react";
import { TodoInput } from "../TodoInput/TodoInput";
import { Todo } from "../Todo/Todo";
import './TodoList.css'


export const TodoList = () =>{
    const [ list, setList] = useState([]);
    const [updateVal, setUpdateVal] = useState("");
    const [isEdit, setIsEdit] = useState(true);
    const [itemId, setItemId] = useState("");

    function filterDel(id){
        const data = list.filter((ele)=>{
            return ele.id !== id;
        })
        setList(data)
    }
    function updateList(){
        const data = list.map((ele)=>{
            if(ele.id === itemId){
                return {
                    id:itemId,
                    input:updateVal
                }
            }else{
                return ele;
            }
        })
        setList(data)
        setIsEdit(true)
    }

    return <div className="todo-list-background">
        <div className="todo-list-head">
            <h1>TODO LIST</h1>
        </div>
        <div className="todo-list-container">
            <TodoInput list={list} 
                        setList={setList} 
                        updateVal={updateVal}
                        setUpdateVal={setUpdateVal} 
                        isEdit={isEdit} 
                        updateList={updateList}
                        />
            {
                list.length > 0 && 
                <div className="line"></div>
            }
            <div className="display-list">
                {
                    list.length > 0 && 
                    list.map((item)=>{
                        return <Todo item={item} 
                                filterDel={filterDel} 
                                setIsEdit={setIsEdit} 
                                setItemId={setItemId}
                                setUpdateVal={setUpdateVal} />
                    })
                }
            </div>
        </div>
        
    </div>
} 