import React, {useState,useEffect} from "react"

function FetchData(){
    const [quote,setQuote]=useState([])
    const [loading,setLoading]=useState(false)
    const [error, setError]=useState("")

    useEffect(()=>{
        async function fetchData(){
            setLoading(true)
            try {
                let response=await fetch("https://api.quotable.io/random")
                let result=await response.json()
                setQuote(result)
            } catch (error) {
                setError(error.message)
            } finally{
                setLoading(false)
            }
        }

        fetchData()
        setInterval(()=>{
            fetchData()
        },30000)
        
    },[])

    if(loading){
        return(
            <h2>Loading...</h2>
        )
    }

    if(error){
        return(
            <h2>Error : {error}</h2>
        )
    }
    async function Button(){
        setLoading(true)
            try {
                let response=await fetch("https://api.quotable.io/random")
                let result=await response.json()
                setQuote(result)
            } catch (error) {
                setError(error.message)
            } finally{
                setLoading(false)
            }
    }

    return (
        <>
            <div key={quote.id}>
                <h1><u>Today's Quote</u></h1>
                <h2 style={{color:"red"}}>"{quote.content}"</h2>
                <h4 style={{color:"green"}}>Author : {quote.author}</h4>
                <button onClick={Button}>Get New Quote</button>
            </div>
        </>
    )
}
export default FetchData