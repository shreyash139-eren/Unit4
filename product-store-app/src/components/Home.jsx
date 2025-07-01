import React,{useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import Product from "./Product"

function Home(){
    const [data, setData]=useState([])
    const [error, setError]=useState("")
    const [loading,setLoading]=useState(false)
    const [data1,setData1]=useState({filter:"",sort:""})

    let filteredData=[...data]

  function handleChange(e){
    const {name,value}=e.target
    setData1(prev=> ({...prev, [name]:value}))

  }


    useEffect(()=>{
        async function fetchData(){
            setLoading(true)
            try {
                const response=await axios.get("https://dummyjson.com/products")
                const result=await response.data.products
                setData(result)
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>Error : {error}</h1>
    }

    if(data1.filter){
        filteredData=filteredData.filter((ele)=>{
            return ele.category.toLowerCase()===data1.filter
        })
    }

    if(data1.sort==="asc"){
        filteredData=filteredData.sort((a,b)=>a.price-b.price)
    }else if(data1.sort==="dsc"){
        filteredData=filteredData.sort((a,b)=>b.price-a.price)
    }

    return(
        <> 
        <div style={{display:"flex",width:"30vw",margin:"auto",justifyContent:"space-around",marginBottom:"10px"}}>
        <select name="filter" id="" style={{width:"100px",textAlign:"center",padding:"5px",borderRadius:"10px"}} onChange={handleChange} value={data1.filter}>
          <option value="">Filter</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
        </select>
        <select name="sort" id="" style={{width:"100px",textAlign:"center",padding:"5px",borderRadius:"10px"}} onChange={handleChange} value={data1.sort}>
          <option value="">Sort</option>
          <option value="asc">Low to High</option>
          <option value="dsc">High to low</option>
        </select>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
        {filteredData.map((ele)=>(
            <div key={ele.id} style={{border:"1px solid",borderRadius:"10px",cursor:"pointer",padding:"10px"}}>
            <h2>{ele.title}</h2>
            <img src={ele.images[0]} alt="" style={{width:"250px"}}/>
            <h3>Category : {ele.category}</h3>
            <h3>Price : ${ele.price}</h3>
            <Link to={`/product/${ele.id}`}>See Details</Link>
            </div>
        ))}
        </div>
        </>
    )
}
export default Home