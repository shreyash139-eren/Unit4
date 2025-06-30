import React, { useContext } from "react"
import UserContext from './UserContext'

function Footer(){
    const {state,setState}=useContext(UserContext)

    return(
        <>
        <h2>{state===false?"Please log in":"Welcome, User"}</h2>
        </>
    )
}
export default Footer