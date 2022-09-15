import React, { useState } from "react";
import './Todo.css'
import AddTask from "./AddTask";
import ListTask from "./ListTask";

function Todo(){
    const [tasks,settask]=useState([])
    function addTask(title){
        const newTask=[...tasks,{title}]
        settask(newTask)

    }
    function removeTask(index){
        const newTask=[...tasks]
        newTask.splice(index,1)
        settask(newTask)
    }
    
    return(
        <div>
            <div className="todo-container">
                <div className="header">TODO APP</div>
                <div className="add-task">
                    <AddTask addTask={addTask}/>
                </div>
                <div className="tasks">
                    {tasks.map((task,index)=>(
                        <ListTask task={task} removeTask={removeTask} index={index}/>
                    ))}
                   
                </div>
            </div>

        </div>
    )
}
export default Todo;