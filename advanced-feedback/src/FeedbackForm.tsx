import {useState,useContext } from "react";
import UserContext from "./UserContext";


export default function FeedbackForm(){
    const users=useContext(UserContext)
    const{}
    const [name,setName]=useState<string>("")
    const [email,setEmail]=useState<string>("")
    const [rating,setRating]=useState<number>(0)
    const [feedback,setFeedback]=useState<string>("")
    const [error,setError]=useState<string>("")

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(name.trim()==="" || rating<0 || rating>10 || feedback.trim()===""){
            setError("Please fill all the data correctly!")
            return
        }

        
    }

return(
<>
<form onSubmit={handleSubmit}>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input type="number" value={rating} onChange={(e)=>setRating(+(e.target.value))} />
    <textarea value={feedback} onChange={(e)=>setFeedback(e.target.value)} placeholder="Enter Feedback"></textarea>
    <button type="submit">Submit</button>
</form>
</>
)
}