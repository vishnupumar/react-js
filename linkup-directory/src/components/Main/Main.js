import React, { useState } from "react"
import { Add } from "../Add/Add"
import { Retrieve } from "../Retrieve/Retrieve"
import './Main.css'


export const Main =()=>{
    const [addPage,setAddPage] = useState(true);

    return <div className="tabs">
        <button className={addPage === true && "active"} onClick={()=>{
            setAddPage(true)
        }}>Add</button>
        <button className={addPage === false && "active"} onClick={()=>{
            setAddPage(false)
        }}>Retrive</button>
        {
            addPage === true ? <Add /> : <Retrieve />
        }
    </div>
}