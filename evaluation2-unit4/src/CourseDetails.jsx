import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { favoriteContext } from "./App";

export default function CourseDetails(){
    const {id}=useParams()
    const [data,setData]=useState()
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    const {favorite,setFavorite}=useContext(favoriteContext)

    async function fetchData(){
        setLoading(true)
        try {
            const response =await axios.get(`https://dummyjson.com/products/${id}`)
            const result=await response
                setData(result.data)
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    if(!data){
       return <p>Loading...</p>
    }

    function handleClick(){
        setFavorite(...favorite,data)
    }

    return(
        <div className="grid justify-center">
        <h1 className="text-3xl font-bold text-center">Course Details</h1>
        {loading && <p className="text-3xl font-bold text-center mt-60">Loading...</p>}
        {error && <p className="text-3xl font-bold text-center mt-60">Error : {error}</p>}
        <div className="mt-20 border-1 p-10 text-center rounded-xl">
            <img src={data.thumbnail} alt="" />
            <p>{data.title}</p>
            <p>Price : ${data.price}</p>
            <p>Category : {data.category}</p>
            <p>Rating : {data.rating}⭐️</p>
            <button className="px-2 py-2 bg-green-500 rounded-xl mt-2 text-white hover:bg-green-600 cursor-pointer" onClick={handleClick}>+Add Favorite</button>
        </div>
        </div>
    )
}