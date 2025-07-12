import {add, remove, toggle} from "../taskSlice"
import {useSelector, useDispatch} from "react-redux"
import React, {useState} from "react"

 export default function TaskList(){
    const task=useSelector((state)=>state.task.data)
    const [input, setInput]=useState("")

    const dispatch=useDispatch()

    function handleClick(){
        if(input.trim()==="") return;
        dispatch(add({id:Date.now(),task:input,completed:false}))
        setInput("")
    }

    function handleDelete(id){
        dispatch(remove(id))
    }

    function handleToggle(id){
        dispatch(toggle(id))
    }

    return (
        <>
        <input type="text"  value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter task..."/>
        <button onClick={handleClick}>Add Task</button>

        <ul>
            {task.length===0 && <p>"No tasks availabe"</p>}
            {
                task.map((ele,i)=>(
                    <div  key={i}>
                    <li style={{textDecoration:ele.completed?"line-through":"none", padding:"10px"}}>{ele.task}<button style={{marginLeft:"20px"}} onClick={()=>{handleToggle(ele.id)}}>{ele.completed?"Incomplete":"Completed"}</button> <button onClick={()=>{handleDelete(ele.id)}}>Delete</button> </li>
                    
                    </div>
                ))
            }
        </ul>
        </>
    )
}