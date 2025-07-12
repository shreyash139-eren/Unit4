import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar(){
    const {items,total}=useSelector((state)=>state.cart)

    return(
        <div className="h-10 m-auto gap-10 flex text-xl justify-center items-center border-b-1">
        <Link to={"/"} className=" hover:text-green-500">Home</Link>
        <Link to={"/cart"} className=" hover:text-green-500">Cart : {items.length===0?0:items.length}</Link>
        </div>
    )
}