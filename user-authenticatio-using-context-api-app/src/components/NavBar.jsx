import React, { useContext } from "react"
import UserContext from './UserContext'

function NavBar(){
    const {state,setState}=useContext(UserContext)
    
    function handleClick(){
        setState(state===false?true:false)
    }
    
    return(
        <>
        <button onClick={handleClick}>{state===false?"Login":"Logout"}</button>
        </>
    )
}
export default NavBar