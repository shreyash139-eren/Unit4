import React from "react";
import { useReducer } from "react";

    function reducer(state,action){
        switch(action.type){
            case 'TOGGLE_VISIBILITY':
                return {isVisible:!state.isVisible}

            default:
                return state
        }
    }

export default function Toggle(){
    const [state,dispatch]=useReducer(reducer,{isVisible:false})

    return(
        <>
        <h1>Toggle</h1>
        {state.isVisible && <h2>Hello, World!</h2>}
        <button onClick={()=>dispatch({type:'TOGGLE_VISIBILITY'})}>Toggle Message</button>
        </>
    )
}