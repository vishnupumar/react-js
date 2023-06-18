import { createContext, useEffect, useState } from "react";

export const myContext = createContext();

function ContextProvider({ children }) {
  const [todoState, setTodoState] = useState([]);
  const [inputState, setInputState] = useState("");
  const [edit, setEdit] = useState(false);
  const [editId,setEditId] = useState(null);

  useEffect(()=>{
    const data = localStorage.getItem("todoState");
    setTodoState(JSON.parse(data))
  },[])

  useEffect(()=>{
    localStorage.setItem("todoState",JSON.stringify(todoState))
  },[todoState])

  const addTodo = (item) => {
    setTodoState([
      ...todoState,
      {
        id: Date.now(),
        task: item,
      },
    ]);
  };

  const editMode = ({id,task}) => {
    setEdit(true)
    setEditId(id)
    setInputState(task)
  };

  const updateTodo = (item) => {
    const updatedData = todoState.map((ele) => {
        if(ele.id === editId){
            return {
                id:editId,
                task:item
            }
        }
      return ele;
    });
    setTodoState(updatedData);
    setEdit(false)
  };

  const deleteTodo = (id) => {
    const data = todoState.filter((ele) => {
      return ele.id !== id;
    });
    setTodoState(data);
  };

  return (
    <myContext.Provider
      value={{
        todoState,
        addTodo,
        updateTodo,
        deleteTodo,
        inputState,
        setInputState,
        edit,
        editMode
      }}
    >
      {children}
    </myContext.Provider>
  );
}

export default ContextProvider;
