import React from "react"
import { useState,useEffect } from "react"
import ThemedBox from "./ThemedBox"

function ThemeApp(){
    const [theme,setTheme]=useState("dark")

    useEffect(()=>{
        localStorage.setItem("theme",theme)
    },[theme])

    useEffect(()=>{
        const saved=localStorage.getItem("theme")
        if(saved){
            setTheme(saved)
        }
    },[])
     
    function toggleTheme(){
        setTheme(prev=>(prev==="dark"?"light":"dark"))
    }

    return(
        <>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
            <ThemedBox theme={theme}/>
            <ThemedBox theme={theme==="dark"?"light":"dark"}/>
            <ThemedBox theme={theme}/>
        </div>
        <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        </div>

        </>
    )

}
export default ThemeApp