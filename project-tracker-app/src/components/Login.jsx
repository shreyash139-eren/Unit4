import React, {useState} from "react";
import {useDispatch,useSelector} from "react-redux"
import {loginUser} from "./authSlice"

function LogIn(){
    const dispatch=useDispatch()
    const {user,loading,error}=useSelector((state)=>state.auth)
    const [email, setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [formError,setFormError]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!email || !password){
            setFormError("Please enter valid credentials!")
        }
        if(password.length<6){
            setFormError("Password must be atleast 6 digits long")
        }
        setFormError("")
        dispatch(loginUser({email,password}))
        console.log(user)
    }

    return (
        <div>
            <h2>LogIn</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email..." value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password..." value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {formError && <div>{formError}</div>}
                {error && <div>{error}</div>}
                <button type="submit" disabled={loading}>{loading?"Loging in...":"LogIn"}</button>
            </form>
        </div>
    )
}
export default LogIn