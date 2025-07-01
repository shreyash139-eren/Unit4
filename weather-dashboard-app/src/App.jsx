import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './components/Home'
import Weather from './components/Weather'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/weather/:city' element={<Weather/>}/>
    </Routes>
    </>
  )
}

export default App
