import { useState } from 'react'
import './App.css'
import Child from './components/Child'
import userContext from './components/UserContext'

function App() {
  const [theme,setTheme]=useState("light")

  function handleClick(){
    setTheme(theme==="light"?"dark":"light")
  }

  return (
    <>
    <button onClick={handleClick}>Toggle Theme</button>
    <userContext.Provider value={theme}>
    <Child/>
    </userContext.Provider>
    </>
  )
}

export default App
