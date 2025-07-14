import React from "react";
import useToggleItems from "../hook/useToggleItems";

export default function Toggle(){
    const [item,toggleItem]=useToggleItems(["A", "B", "C"], 1)
    return(
        <>
        <p className="text-3xl font-bold text-center m-5"><u>Toggle</u></p>
        <p className="text-2xl font-bold text-center m-5 text-blue-800">Element : {item}</p>
        <button className="ml-[48%] bg-blue-400 px-2 py-1 rounded-lg text-white cursor-pointer hover:bg-blue-500" onClick={toggleItem}>Toggle</button>
        </>
    )
}