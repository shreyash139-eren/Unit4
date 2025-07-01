import React,{useState} from "react"
import {Link} from "react-router-dom"

function Home(){
const [movie,setMovie]=useState("")
    return(
        <>
        <h1><u>🎬 Search Movies</u></h1>
        <input type="text" placeholder="Enter Movie Name" onChange={(e)=>setMovie(e.target.value.toLowerCase())} style={{width:"400px",padding:"10px",borderRadius:"10px",marginRight:"10px",textAlign:"center",fontSize:"16px"}}/>
        <Link to={`/movie/${movie.toLowerCase()}`}>Submit</Link>
        </>
    )
}
export default Home