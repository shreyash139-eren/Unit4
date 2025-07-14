import React, {useState,useRef} from "react";

export default function Counter(){
    const [time,setTime]=useState<number>(0)
    
    const [second,setsecond]=useState<number>(0)
    const counterRef=useRef<NodeJS.Timeout | null>(null)

    function handleStart(){
        if(counterRef.current!==null)return
        counterRef.current=setInterval(()=>{
            setsecond((prev)=>prev+1)
        },1000)
    }

    function handleStop(){
        if(counterRef.current!==null){
            clearInterval(counterRef.current)
            counterRef.current=null
        }
        
    }

    function handleReset(){
        if(counterRef.current!==null){
            clearInterval(counterRef.current)
            counterRef.current=null
            setsecond(0)
        }
    }

    return(
        <>
        <h1>Timer</h1>
        <h2>{second}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleStop}>Stop</button>

        </>
    )
}