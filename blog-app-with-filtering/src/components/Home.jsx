import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

function Home(){
    const [data,setData]=useState([])
    const [change,setChange]=useState("")
    const [filtered,setFiltered]=useState([])
    const [loading,setLoading]=useState(false)
    const [error, setError]=useState("")

  useEffect(()=>{
    const filter=data.filter((ele)=>{
        return ele.title.toLowerCase().includes(change.toLowerCase())
    })
    setFiltered(filter)
  },[change,data])
    useEffect(()=>{
        setLoading(true)
        async function fetchData(){
            try {
                let response=await axios.get("https://dummyjson.com/posts")
                let result=await response.data.posts
                setData(result)
                setFiltered(result)
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])

    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }
    if(error){
        return(
            <h1>Error : {error}</h1>
        )
    }

    

    return(
        <>
        <input type="text" placeholder="Search" onChange={(e)=>{setChange(e.target.value)}} style={{width:"300px",padding:"5px",borderRadius:"10px"}}/>
        
        {filtered.length===0?(
                <h1>No Blog Found!</h1>):
                (<div id="container">
                    {filtered.map((ele)=>(
                        <div key={ele.id} style={{border:"1px solid", marginBottom:"10px", marginTop:"10px"}}>
                            <h2>Title : {ele.title}</h2>
                            <p>{ele.body}</p>
                            <Link to={`/posts/${ele.id}`}>See Details</Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}
export default Home