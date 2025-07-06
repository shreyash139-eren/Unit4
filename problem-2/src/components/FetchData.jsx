import React, { useEffect, useState } from "react"
import axios from "axios"

function FetchData(){
const [todos,setTodos]=useState([])
const [page,setPage]=useState(1)
const itemsPerPage=10

async function fetchData(){
    try {
        let response=await axios.get("https://jsonplaceholder.typicode.com/todos")
        let result =await response.data
        setTodos(result)
    } catch (error) {
        console.log(error.message)
    }
}


const indexOfLastPost=page*itemsPerPage
const indexOfFirstPost=indexOfLastPost-itemsPerPage
const posts=todos.slice(indexOfFirstPost,indexOfLastPost)

useEffect(()=>{
    fetchData()
},[])

return (
    <>
    <h2 style={{backgroundColor:page%2===0?"green":"red"}}>Page : {page}</h2>
    {posts.map((ele)=>(
        <div key={ele.id} style={{border:"1px solid gold", marginBottom:"20px", padding:"10px"}}>
        <h2>ToDo : {ele.title}</h2>
        <h3>User : {ele.userId}</h3>
        </div>
    ))}
    <button onClick={()=>setPage((prev)=>prev-1)} disabled={page===1}>Prev</button>
    <button onClick={()=>setPage((prev)=>prev+1)}>Next</button>
    </>
)

}
export default FetchData