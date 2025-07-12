import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/Cart'
import CartPage from './components/CartPage'
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Cart/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </>
  )
}

export default App
