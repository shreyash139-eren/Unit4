import React, { useEffect,useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import {loginUser} from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(){
    const dispatch=useDispatch()
    const {user,loading,error}=useSelector((state)=>state.auth)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [formError,setFormError]=useState("")
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(!email ||!password){
            setFormError("Please fill out all the fields!")
            return
        }
        if(password.length<6){
            setFormError("Password must be 6 characters long!")
            return
        }
        setFormError("")
        dispatch(loginUser({email,password}))
    }

    useEffect(()=>{
        if(user){
            navigate("/home")
        }
    },[user, navigate])


    return (
        <div className="grid justify-center items-center h-[100vh] border-1 w-[100%] bg-white-200">
            <div className="grid h-[350px] rounded-3xl justify-center bg-red-800 p-10">
                <p className="text-2xl font-bold text-center text-white">Login</p>
                <form onSubmit={handleSubmit}>
                    <input className="block border-2 w-80 rounded-xl px-5 py-1 border-gray-500 mb-5 bg-white" type="email" value={email} placeholder="Enter email.." onChange={(e)=>setEmail(e.target.value)}/>
                    <input className="block border-2 w-80 rounded-xl px-5 py-1 border-gray-500 mb-5 bg-white" type="password" value={password} placeholder="*******" onChange={(e)=>setPassword(e.target.value)}/>
                    {formError && <div className="text-center text-white">{formError}</div>}
                    {error && <div className="text-center text-white">{error}</div>}
                    <button className="bg-blue-400 mt-2 text-white px-5 py-1 text-lg rounded-full hover:bg-blue-500 cursor-pointer" disabled={loading}>{loading?"Logging in...":"Login"}</button>
                </form>
                <Link to={"/signup"} className="text-lg text-center text-white hover:text-green-600">Don't have an account? Signup</Link>
            </div>
        </div>
    )
}
export default Login