import React from "react";
import { useState } from "react";
import { useReducer } from "react";

const initialValue={
    email:"",
    password:"",
    user:[]
}

function formReducer(state,action){
    switch(action.type){
        case 'update':
            return {...state,[action.field]:action.value,}
        case 'submit':
            return {...state,user:[...state.user,{email:state.email,password:state.password}]}
        case 'reset':
            return {...state,email:"",password:""}
        default:
            return "Invalid action type"
    }
}

export default function Form(){
    const [state,dispatch]=useReducer(formReducer,initialValue)

    function handleChange(e){
        const {name,value}=e.target
        dispatch({type:'update', field:name, value:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:"submit"})
        dispatch({type:"reset"})
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email : </label>
                <input name="email" type="email" placeholder="Enter Your Email" value={state.email} onChange={handleChange}/>
            </div>
            <div>
                <label>Password : </label>
                <input name="password" type="password" placeholder="Enter Your Password" value={state.password} onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
        <div>
            {state.user.length>0?state.user.map((ele,i)=>(
                <div key={i} style={{marginTop:"20px"}}>
                <div>User Email : {ele.email}</div>
                <div>User Password :{ele.password}</div>
                </div>
            )):(<div>No details found</div>)}
        </div>
        </>
    )
}