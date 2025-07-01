import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Product from './components/Product'

function App() {
  
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product/:id" element={<Product/>}/>
    </Routes>
    </>
  )
}

export default App
