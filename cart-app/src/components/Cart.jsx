import React, { use, useEffect, useState } from "react"
import axios from "axios"
import {add,remove} from "../cartSlice"
import {useSelector,useDispatch} from "react-redux"

export default function Cart(){
    const [products,setProducts]=useState([])
    const [loading, setLoading]=useState(false)
    const [error,setError]=useState("")
    const dispatch=useDispatch()

    async function fetchData(){
        setLoading(true)
        try {
            const response=await axios.get("https://fakestoreapi.com/products")
            const result=await response.data
            setProducts(result)
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    function handleAdd(ele){
        dispatch(add(ele))
    }

    return(
        <>
        <p className="text-center text-3xl font-bold p-5">Products</p>
        {loading && <div className="animate-spin rounded-full h-12 w-12 border-blue-800 text-center"></div>}
        {error && <h1>Error : {error}</h1>}
        <div className="grid grid-cols-3  gap-10 w-[90%] m-auto mb-10">
        {products.map((ele)=>(
            <div key={ele.id} className="grid place-items-center w-100 border-1 rounded-3xl p-5 ">
                <img src={ele.image} alt="" className="w-60 max-w-full max-h-full"/>
                <p className="text-center"> {ele.title}</p>
                <p className="text-center">{ele.category}</p>
                <p className="text-center">Price : ${ele.price}</p>
                <button className="bg-green-600" onClick={()=>handleAdd(ele)}>Add To Cart</button>
            </div>
        ))}
        </div>
        </>
    )

}