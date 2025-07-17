import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

export default function Home(){
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState('')

    async function fetchData(){
        setLoading(true)
        try {
            const response= await axios.get("https://dummyjson.com/products")
            const result= await response
            setData(result.data.products)
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }
    
    useEffect(()=>{
        fetchData()
    },[])

    return(
        <>
        <p className="text-3xl font-bold text-center mt-5">Products</p>
        {loading && <p className="text-3xl font-bold text-center mt-70">Loading...</p>}
        {error && <p className="text-3xl font-bold text-center mt-70">Error : {error}</p>}
        <div className="w-[90%] grid grid-cols-4 m-auto gap-10 mt-5 text-center">
        {data.map((ele)=>(
            <div className="border-1 p-5 rounded-xl">
                <img src={ele.thumbnail} alt="" />
                <p className="font-semibold text-lg">{ele.title}</p>
                <p>Price : ${ele.price}</p>
                <Link to={`/course/${ele.id}`} className="text-green-400 hover:text-green-600">See Details</Link>
            </div>
        ))}
        </div>
        </>
    )
}