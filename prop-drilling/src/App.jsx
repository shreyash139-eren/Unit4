import { useState } from 'react'
import './App.css'
import Child from './components/Child'
function App() {
  const [name,setName] = useState('')
  const [prop,setProp]=useState("")

  function handleClick(){
    setName(prop)
  }
  return (
    <>
    <input type="text" placeholder='Enter Name' onChange={(e)=>setProp(e.target.value)}/>
    <button onClick={handleClick}>Submit</button>
    <Child name={name}/>
    </>
  )
}

export default App
