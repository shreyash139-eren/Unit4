import React, {useState, useEffect} from "react"

function Counter(){
    const [count,setCount]=useState(0)
    const [flag, setFlag]=useState(false)

   
    useEffect(()=>{
       let timer;
       if(flag){
        timer=setInterval(() => {
            setCount(prev=>prev+1)
        }, 1000);
       }
       
       return ()=>clearInterval(timer)
    },[flag])
   
    useEffect(() => {
        if (count === 10) {
            const audio = new Audio('/audio.mp3')
            audio.play().catch(err => {
                console.error("Audio play failed:", err)
            })
        }
    }, [count])

    function StartCounter(){
            setFlag(true)
    }

    function StopCounter(){
        setFlag(false)
    }

    function Reset(){
        setCount(0)
        setFlag(false)
    }

    return(
        <>
        <h1><u>Counter App</u></h1>
        <h2>Count : {count}</h2>
        <button onClick={StartCounter}>Start</button>
        <button onClick={StopCounter}>Stop</button>
        <button onClick={Reset}>Reset</button>
        </>
    )
}
export default Counter