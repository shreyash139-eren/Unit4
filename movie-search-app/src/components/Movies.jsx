import React,{useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

function Movies(){
const {movie}=useParams()
const [data,setData]=useState([])
const [loading,setLoading]=useState(false)
const [error,setError]=useState("")

let key="b5db3ec8"

useEffect(()=>{
    async function fetchData(){
        setLoading(true)
        try {
            let response=await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${movie}`)
            const result=await response.data.Search
            setData(result)
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    fetchData()
},[])

if(loading){
    return <h1>Loading...</h1>
}
if(error){
    return <h1>Error : {error}</h1>
}

return(
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr",gap:"20px"}}>
    {data.map((ele)=>(
        <div key={ele.imdbID} style={{border:"1px solid gray",borderRadius:"12px",padding:"10px"}}>
            <h2>{ele.Title}</h2>
            <img src={ele.Poster} alt="" />
            <h3>Year : {ele.Year}</h3>
        </div>
    ))
    }
    </div>
)
}

export default Movies