import React, { useContext } from "react"
import UserContext from './UserContext'


function Main(){
    const {state,setState}=useContext(UserContext)

    return(
        <>
        <h1>{state===false?"Please login to your account!":"Welcome to your Account"}</h1>
        </>
    )
}
export default Main