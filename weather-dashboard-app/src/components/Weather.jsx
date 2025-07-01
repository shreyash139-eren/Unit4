import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function Weather(){
    const {city}=useParams()
    const [data,setData]=useState(null)
    const [error,setError]=useState("")
    let key="741bd4a1cddde67890715817ddc94f5a"
    useEffect(()=>{
        async function fetchData(){
            try {
                const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
                const result=await response.data
                setData(result)
            } catch (error) {
                
            }
        }
    fetchData()

    },[])

    if(!data){
        return <h1>Loading...</h1>
    }

    return(
        <>
        <h1>City : {city}</h1>
        <h2>Weather : {data.weather[0].description}</h2>
        <h2>Humidity : {data.main.humidity}</h2>
        <h2>Temperature : {data.main.temp}</h2>
        <h2>Wind Speed : {data.wind.speed}</h2>
        </>
    )
}
export default Weather