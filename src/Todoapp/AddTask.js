import React from "react";
import {useState} from "react"
function AddTask({addTask}){
    const [value,setValue]=useState("")
    function additem(){
       addTask(value)
       setValue("")
    }

    return(
        <div>
            <div className="input-container">
                <input type="text" className="input" placeholder="Add a new task" onChange={(e)=>{setValue(e.target.value)}} value={value}/>
                <button onClick={additem} className="add-button">ADD</button>
            </div>

        </div>
    )
}
export default AddTask;