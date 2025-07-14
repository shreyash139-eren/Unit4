import React, {useState} from "react"
import { useRef } from "react"

function useTimer(){
    const [time,setTime]=useState(0)
    const intervalRef=useRef(null)

    const start=()=>{
        if(intervalRef.current!==null)return
        intervalRef.current=setInterval(()=>{
            setTime((prev)=>prev+1)
        },1000)
    }

    const stop=()=>{
        if(intervalRef.current!==null){
        clearInterval(intervalRef.current)
        intervalRef.current=null
        }
    }

    const reset=()=>{
        if(intervalRef.current!==null){
            clearInterval(intervalRef.current)
            intervalRef.current=null
            }
            setTime(0)
    }
   
    return [time,start,stop,reset]

}
export default useTimer