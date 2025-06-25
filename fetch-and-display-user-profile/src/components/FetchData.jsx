import React, { useState, useEffect } from 'react'

function FetchData(){
    const [data, setData]=useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState("")
    const [filtered, setFiltered]=useState([])

    useEffect(()=>{
        
        async function fetchData(){
            setLoading(true)
            try {
                let response=await fetch("https://jsonplaceholder.typicode.com/users")
                let result=await response.json()
                setData(result)
                setFiltered(result)
            } catch (error) {
                setError(error.message)
            } finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])

    if(loading){
        return(
            <h2 style={{textAlign:"center", marginTop:"40vh"}}>Loading...</h2>
        )
    }

    if(error){
        return(<h2 style={{textAlign:"center", marginTop:"40vh"}}>Error : {error}</h2>)
    }
    function search(e){
        let query=e.target.value
        if(query){
            let sort=data.filter((ele)=>{
                return ele.name.toLowerCase().includes(query.toLowerCase())
            })
        setFiltered(sort)
        }else{
            setFiltered(data)
        }
    }

    return(
        <>
        <div id="nav">
            <input type="text" onChange={search} placeholder='Search'/>
        </div>
        <div id="container">
        {
            filtered.map((ele)=>(
                <div key={ele.id}>
                    <h2>Name : {ele.name}</h2>
                    <h3>Email : {ele.email}</h3>
                    <h3>City : {ele.address.city}</h3>
                </div>
            ))
        }

        </div>
        </>
    )
}
export default FetchData