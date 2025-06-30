import React, { useContext } from "react"
import GChild from "./GChild"
import UserContext from "./UserContext"

function Child(){
    const theme=useContext(UserContext)

    let styles
    if(theme==="light"){
       styles={
        width:"400px",
        height:"200px",
        border:"1px solid",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"beige",
        color:"black"
        
        }
    }else if(theme==="dark"){
        styles={
            width:"400px",
            height:"200px",
            border:"1px solid",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"black",
            color:"white"
            }
    }

    return(
        <>
        <h2 style={styles}>Parent theme : {theme}</h2>
        <GChild/>
        </>
    )
}
export default Child