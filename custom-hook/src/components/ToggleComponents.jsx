import React from "react";
import useToggle from "../hooks/useToggle";

const ToggleComponents=()=>{
    const [isVisible,toggleVisibility]=useToggle(false)

    return(
        <div className="grid justify-center items-center h-[20vh] mt-60">
            <h1 className="text-3xl font-bold">Toggle Component</h1>
            {isVisible && <p className="text-center font-semibold border-1 rounded-xl p-2 text-xl mt-3 mb-3">Component Vsible!</p>}
            <button className="bg-red-800 w-40 text-white px-2 py-2 rounded-xl hover:bg-red-700 cursor-pointer" onClick={toggleVisibility}>Toggle Message</button>
        </div>
    )
}
export default ToggleComponents