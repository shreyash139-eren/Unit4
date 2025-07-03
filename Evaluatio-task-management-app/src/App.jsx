import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css'
import Welcome from './components/Welcome'
import Tasks from './components/Tasks'
import Navbar from './components/Navbar'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/tasks' element={<Tasks/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
    </>
  )
}

export default App
