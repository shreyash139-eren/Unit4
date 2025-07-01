import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function BlogDetails(){
    const {id}=useParams()
    const [data,setData]=useState(null)
    const [error,setError]=useState("")

    useEffect(()=>{
        async function fetchData(){
            try {
                let response=await axios.get(`https://dummyjson.com/posts/${id}`)
                let result =await response.data
                setData(result)
            } catch (error) {
                setError(error.message)
            }
        }
        fetchData()
    },[])

    if(error){
        return <h1>Error : {error}</h1>
    }

    if(!data){
        return <h1>Loading...</h1>
    }

    return(
        <div>
            <h1>Title : {data.title}</h1>
            <h2>{data.body}</h2>
            <h3>Tags : {data.tags.map((ele)=> ele+", ")}</h3>
            <h3>Likes : {data.reactions.likes}</h3>
        </div>
    )
}
export default BlogDetails