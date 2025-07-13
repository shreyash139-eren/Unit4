
import './App.css'
import Signup from "./components/Signup"
import Login from './components/Login'
import Home from './components/Home'
import {Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
