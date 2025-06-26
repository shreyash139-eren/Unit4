import React from "react"

function Counter({initialValue,setter}){


    function Increase(){
        setter(initialValue=>initialValue+1)
    }

    function Decrease(){
        setter(initialValue=>initialValue-1)
        
    }

return(
    <>
    <h1><u>Counter App</u></h1>
    <h2>Count : {initialValue}</h2>
    <button onClick={Increase}>Increase</button>
    <button disabled={initialValue===0} onClick={Decrease}>Decrease</button>
    </>
)
}

export default Counter