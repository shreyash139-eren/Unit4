import React, { useEffect, useRef, useState } from "react"
import axios from "axios"

function FetchData(){
    const [chars,setChars]=useState([])
    const pageRef=useRef(1)
    const [curr,setCurr]=useState(1)
    const itemsPerPage=10

    let page
    async function fetchData(){
        try {
            let response=await axios.get(`https://rickandmortyapi.com/api/character`)
            let result=await response.data
            page=result.info.pages
            let allChars=[]
            for(let i=1;i<page;i++){
                let response=await axios.get(`https://rickandmortyapi.com/api/character?page=${i}`)
                let result=await response.data.results
                allChars.push(...result)
            }
            setChars(allChars)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

const indexOfLastChar=pageRef.current*itemsPerPage
const indexOfFirstChar=indexOfLastChar-itemsPerPage
const currChars=chars.slice(indexOfFirstChar,indexOfLastChar)

function handlePrev(){
    if(pageRef.current>1){
        pageRef.current-=1
        setCurr(pageRef.current)
    }
}

function handleNext(){
        pageRef.current+=1
        setCurr(pageRef.current)
}

return(
    <>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
    {currChars.map((ele,i)=>(
        <div key={i}>
            <img src={ele.image} alt="" />
            <h2>Name : {ele.name}</h2>
            <h3>Gender : {ele.gender}</h3>
            <h3>Appearance : {ele.episode.length} episodes</h3>
            <h3>Origin : {ele.origin.name}</h3>
        </div>
    ))
    }
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",marginLeft:"100px"}}>
    <button onClick={handlePrev} style={{width:"200px"}}>Prev</button>
    <p style={{backgroundColor:curr%2===0?"green":"red",width:"100px",marginLeft:"50px"}}>{pageRef.current}</p>
    <button onClick={handleNext} style={{width:"200px"}}>Next</button>
    </div>
    </>
)
}
export default FetchData