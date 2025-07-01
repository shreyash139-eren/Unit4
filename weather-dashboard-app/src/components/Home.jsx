import React,{useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Home(){
    const [city, setCity]=useState("")


    return(
        <>
        <input type="text" placeholder="Enter City name" style={{width:"400px",padding:"10px",borderRadius:"12px",fontSize:"16px",marginRight:"15px"}} onChange={(e)=>setCity(e.target.value.toLowerCase())}/>
        <Link to={`weather/${city}`}>Submit</Link>
        </>
    )
}
export default Home