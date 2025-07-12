import { Routes,Route } from 'react-router-dom'
import './App.css'
import SignUP from './components/SignUP'
import LogIn from './components/Login'

function App() {

  return (
    <>
    <Routes>
    <Route path='/signup' element={<SignUP/>}/>
    <Route path='/login' element={<LogIn/>}/>
    </Routes>
    </>
  )
}

export default App
