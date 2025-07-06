import React from "react";
import { useReducer } from "react";

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {count:state.count+1}

        case 'decrement':
            return {count:state.count-1}

        default:
            return state
    }
}

export default function Counter(){
    const [state, dispatch]=useReducer(reducer, {count:0})

return(
    <>
    <h1>Counter App</h1>
    <h2>Count : {state.count}</h2>
    <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
    <button onClick={()=>dispatch({type:'decrement'})} disabled={state.count===0}>Decrement</button>
    </>
)
}