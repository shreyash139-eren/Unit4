import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

function Product(){
    const {id}=useParams()
    const [data, setData]=useState([])
    const [error,setError]=useState("")

    useEffect(()=>{
        async function fetch(){
            try {
                const response=await axios.get(`https://dummyjson.com/products/${id}`)
                const result=await response.data
                setData(result)
                console.log(result)
            } catch (error) {
                setError(error.messgage)
            }
        }
        fetch()
    },[])

    if(error){
        return <h1>Error : {error}</h1>
    }

    if(!data){
        return <h1>Loading...</h1>
    }
    return (
        <div style={{border:"1px solid gold",borderRadius:"12px"}}>
        <h2>{data.title}</h2>
        <img src={data.images} alt="" style={{width:"400px"}}/>
        <h3>Availability : {data.availabilityStatus}</h3>
        <h3>Category : {data.category}</h3>
        <h3>Rating : {data.rating}</h3>
        <h3>Price : ${data.price}</h3>
        </div>
    )

}
export default Product