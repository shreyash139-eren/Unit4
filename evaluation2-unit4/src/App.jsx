import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from "./Home"
import CourseDetails from "./CourseDetails"
import { createContext, useState } from "react"

export const favoriteContext=createContext()
function App() {
  const [favorite,setFavorite]=useState(0)

  return (
    <>
    <favoriteContext.Provider value={{favorite,setFavorite}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course/:id" element={<CourseDetails/>}/>
      </Routes>
      </favoriteContext.Provider>
    </>
  )
}

export default App
