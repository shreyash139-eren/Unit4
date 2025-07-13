import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

export default function Home(){
    const dispatch=useDispatch()
    const navigate=useNavigate()

    function handleLogout(){
        dispatch(logout())
        navigate("/login")
    }

    return(
        <>
        <h1>Home</h1>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}