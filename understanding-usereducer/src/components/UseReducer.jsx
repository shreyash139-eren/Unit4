import React, { useEffect, useReducer } from "react";

    function reducer(state,action){
        switch(action.type){
            case 'toggle':
                return {theme:state.theme==="dark"?"light":"dark"}
            
            default:
                return state
        }
    }

export default function UseReducer(){
    const [state,dispatch]=useReducer(reducer,{theme:"dark"})

    useEffect(()=>{
        if(state.theme==="dark"){
            document.body.style.backgroundColor="#222"
            document.body.style.color="white"
        }else{
            document.body.style.backgroundColor="beige"
            document.body.style.color="black"
        }
    },[state.theme])

    return(
        <>
        <h1>Theme Toggle</h1>
        <h2>Theme : {state.theme}</h2>
        <button onClick={()=>dispatch({type:"toggle"})}>Toggle</button>
        </>
    )
}
