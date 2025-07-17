import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from "./Home"
import CourseDetails from "./CourseDetails"
import { createContext, useState } from "react"
import Navbar from "./Navbar"
import Favorites from "./Favorites"

export const favoriteContext=createContext()
function App() {
  const [favorite,setFavorite]=useState([])

  return (
    <>
    <Navbar/>
    <favoriteContext.Provider value={{favorite,setFavorite}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course/:id" element={<CourseDetails/>}/>
        <Route path="/favorites" element={<Favorites/>}></Route>
      </Routes>
      </favoriteContext.Provider>
    </>
  )
}

export default App
