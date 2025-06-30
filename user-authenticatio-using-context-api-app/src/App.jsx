import { useState } from 'react'
import './App.css'
import UserContext from "./components/UserContext"
import NavBar from './components/NAvbar'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  const [state,setState]=useState(false)
 

  return (
    <div>
     <UserContext.Provider value={{state,setState}}>
      <NavBar/>
      <Main/>
      <Footer/>
     </UserContext.Provider> 
    </div>
  )
}

export default App
