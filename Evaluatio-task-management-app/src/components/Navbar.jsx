import React from "react"
import {Link} from "react-router-dom"

function Navbar(){

return(
    <>
    <Link to="/">Home</Link>
    <Link to="/tasks">Tasks</Link>
    <Link to="/about">About</Link>
    </>
)
}
export default Navbar