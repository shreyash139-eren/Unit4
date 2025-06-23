import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [form,setForm]=useState({task:"",priority:"1"})
  const [data,setData]=useState([])

  function handleChange(e){
    const {name,value}=e.target
    setForm({...form, [name]:value})
  }

  function handleSubmit(e){
    e.preventDefault()
    if(form.task.trim()===""){
      return alert("Task cannot be empty.")
    }
    setData([...data, form])
    setForm({task:"",priority:"1"})
  }

  function handleDelete(i){
    const newData=data.filter((ele,index)=>index!==i)
    setData(newData)
  }
  
  const sorted=[...data].sort((a,b)=>parseInt(a.priority)-parseInt(b.priority))

  return (
   <>
   <form onSubmit={handleSubmit}>
    <label>Task : <input type="text" name="task" value={form.task} onChange={handleChange}/></label>
    <label>Priority : 
      <select name="priority" value={form.priority} onChange={handleChange}>
      <option value="1">High</option>
      <option value="2">Medium</option>
      <option value="3">Low</option>
      </select>
    </label>
    <button type="submit">Add</button>
   </form>

    <h1>Tasks</h1>
   <div id='container'>
    {sorted.map((tasks,i)=>{
      const isHighPriority = tasks.priority === "1";
      const taskStyle = isHighPriority ? { backgroundColor: "red" } : {};
      return(<div key={i} style={taskStyle}>
        <h2>{tasks.task}</h2>
        <input type='checkbox'/>
        <button onClick={()=>handleDelete(i)}>Delete</button>
      </div>)
})}
   </div>
   </>
  );
}

export default App;
