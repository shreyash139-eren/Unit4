import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css'
import Home from './components/Home'
import Movies from './components/Movies'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:movie' element={<Movies/>}/>
    </Routes>
    
    </>
  )
}

export default App
