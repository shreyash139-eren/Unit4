import React, { useRef, useState } from "react"

function Focus(){
    const inputRef=useRef(null)
    const [flag,setFlag]=useState(false)

    function focusInput(){
        inputRef.current.focus()
        setFlag(true)
    }

    return(
        <>
        <input type="text" ref={inputRef} placeholder="Type Here..." style={{backgroundColor:flag?"beige":"black"}}/>
        <button onClick={focusInput} >Focus</button>
        {flag && <h2> Focused! </h2>}
        </>
    )
}
export default Focus