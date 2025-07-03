import React from "react"
import {Link} from "react-router-dom"

function Navbar(){

return(
    <>
    <Link  style={{marginRight:"10px"}} to="/">Home</Link>
    <Link style={{marginRight:"10px"}} to="/tasks">Tasks</Link>
    <Link style={{marginRight:"10px"}} to="/about">About</Link>
    </>
)
}
export default Navbar