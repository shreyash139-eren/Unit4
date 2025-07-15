import { useState } from "react";

type FeedbackData = {
    name: string;
    email: string;
    rating: number;
    feedback: string;
  }

export default function  Form(){
const [name,setName]=useState<string>("")
const [email,setEmail]=useState<string>("")
const [rating,setRating]=useState<number>(0)
const [feedback,setFeedback]=useState<string>("")
const [error,setError]=useState("")
const [data,setData]=useState<FeedbackData[]>([])

function handleData (e: React.FormEvent<HTMLFormElement>){
e.preventDefault()

if(name.trim()==="" || rating<0 || rating>10 || email.length<5|| feedback.trim()===""){
    setError("Please fill correct data!")
    return
}
setError("")
const formData={name,email,rating,feedback}
setData((prev)=>[...prev,formData])

setName("")
setEmail("")
setRating(0)
setFeedback("")
}



return(
    <>
    <div style={{display:"flex",borderBottom:"1px solid", justifyContent:"center",marginTop:"10px", padding:"20px"}}>
        
    <form onSubmit={handleData}>
    <h2 style={{display:"block"}}>Feedback form</h2>
    <input style={{display:"block",padding:"5px",width:"250px",margin:"5px",borderRadius:"10px"}} type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} value={name}/>
    <input style={{display:"block",padding:"5px",width:"250px",margin:"5px",borderRadius:"10px"}} type="email" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
    <input style={{display:"block",padding:"5px",width:"250px",margin:"5px",borderRadius:"10px"}} type="number" placeholder="Rating 0-10" onChange={(e)=>setRating(+(e.target.value))} value={rating} />
    <textarea style={{display:"block",padding:"5px",width:"250px",margin:"5px",borderRadius:"10px"}}  onChange={(e)=>setFeedback(e.target.value)} placeholder="Feedback" value={feedback}></textarea>
    <button style={{padding:"5px 10px",fontSize:"16px",borderRadius:"12px"}} type="submit">Submit</button>
    </form>
    </div>
    <div>
        {error && <p>Error : {error}</p>}
        {data.length>0?<h2><u>Feedbacks</u></h2>:""}
        {data.length>0?(
            data.map((ele)=>(
                <div style={{border:"1px solid gold"}}>
                <p>Name : {ele.name}</p>
                <p>Email : {ele.email}</p>
                <p>Rating : {ele.rating}</p>
                <p>Feedback : {ele.feedback}</p>
                </div>
            ))
        ):(<p>Please add feedaback!</p>)}
    </div>
    </>
)
}