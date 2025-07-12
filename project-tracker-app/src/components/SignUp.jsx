import React, {useState} from "react";
import {useDispatch,useSelector} from "react-redux"
import {signupUser} from "./authSlice"

function SignUP(){
    const dispatch=useDispatch()
    const {user,loading,error}=useSelector((state)=>state.auth)
    const [email, setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [formError,setFormError]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!email || !password){
            setFormError("Please enter valid credentials!")
            return
        }
        if(password.length<6){
            setFormError("Password must be atleast 6 digits long")
            return
        }
        setFormError("")
        dispatch(signupUser({email,password}))
    }

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email..." value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password..." value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {formError && <div>{formError}</div>}
                {error && <div>{error}</div>}
                <button type="submit" disabled={loading}>{loading?"Signing Up...":"SignUp"}</button>
            </form>
        </div>
    )
}
export default SignUP