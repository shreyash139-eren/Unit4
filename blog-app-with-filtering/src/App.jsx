import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import BlogDetails from './components/BlogDetails'

function App() {
  

  return (
    <>
     <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/posts/:id' element={<BlogDetails/>}/>
     </Routes>
    </>
  )
}

export default App
