import React, {useState} from "react"

function AutoCorrectApp(){
    const [input,setInput]=useState("")

    let count=0

  const corrections = {
    "teh": "the",
    "recieve": "receive",
    "adress": "address",
    "wierd": "weird",
    "thier": "their"
  };
  const words=input.split(" ")
  const corrected=words.map((word)=>{
    if(corrections[word]){
        count++
        return corrections[word]
        
    }
    return word
  })
 
  const final=corrected.join(" ")

    return(
        <>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter text..."/>
        <h4>Corrected Count : {count}</h4>
        <div id="message">
        <h4>Corrected Text Preview: </h4>
        <p>{final}</p>
        </div>
        </>
    )
}
export default AutoCorrectApp