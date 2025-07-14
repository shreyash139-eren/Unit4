import React from "react";
import useTimer from "../hook/useTimer";

function Timer(){
    const [time,start,stop,reset]=useTimer()
    return(
        <div className="grid mt-60 justify-center">
        <p className=" text-center text-3xl font-bold">Timer</p>
        <p className="text-center text-xl font-semibold mt-2 mb-2 border-1 rounded-xl">{time}</p>
        <button className=" bg-red-800 px-2 py-1 mb-2 rounded-xl text-white text-lg cursor-pointer" onClick={start}>Start</button>
        <button className=" bg-red-800 px-2 py-1 rounded-xl text-white text-lg cursor-pointer" onClick={stop}>Stop</button>
        <button className="bg-red-800 px-2 py-1 mt-2 rounded-xl text-white text-lg cursor-pointer" onClick={reset}>Reset</button>

        </div>
    )
}
export default Timer