import React, { useState } from "react"

function Tasks(){
    const [form,setForm]=useState({title:"",task:""})
    const [tasks,setTasks]=useState([])
    const [toggle,setToggle]=useState(false)

   function handleChange(e){
    const {name,value}=e.target
    setForm({...form, [name]:value})
    console.log(form)
   }

    function handleSubmit(){
        setTasks([...tasks, form])
        console.log(tasks)
    }
    let styles
        if(toggle){
             styles={
                textDecoration:"line-through"
            }
        }
        
return(
    <>
    <div>
    <input type="text" name="title" value={form.title} onChange={handleChange}/>
    <input type="text" name="task"  value={form.task} onChange={handleChange}/>
    <button onClick={handleSubmit}>Submit</button>
    </div>
    <div id="container">
        {tasks.length===0?(<h1>""No tasks yet! Add one to get started.""</h1>):(tasks.map((ele,i)=>(
            <div key={i}>
            <h2>{ele.title}</h2>
            <p onClick={()=>setToggle(!toggle)} style={styles}>{ele.task} <input type="checkbox" /></p>
            </div>
        )))
        }
    </div>
    </>
)
}
export default Tasks