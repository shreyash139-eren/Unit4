import React, {useState} from "react"

function ToggleButton({facts}){
    const [state, setState]=useState("OFF")
    const [random,setRandom]=useState("")
    
    function toggleButton(){
        if(state==="OFF"){
            setState("ON")
        }else{
            setState("OFF")
        }
        setRandom(facts[Math.floor(Math.random()*15)])
    }

    let styles;
    if(state==="ON"){
        styles={
            color:"green"
        }
    }else if(state==="OFF"){
        styles={
            color:"red"
        }
    }

    return(
        <>
        <h1><u>Toggle</u></h1>
        <h2 style={styles}>State : {state}</h2>
        <h3>Random Fact : {random}</h3>
        <button onClick={toggleButton}>Change State</button>
        </>
    )
}
export default ToggleButton