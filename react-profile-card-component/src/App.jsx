import { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import './App.css'

function App() {

  return (
    <>
    <h1><u>Profile Card</u></h1>
    <div id="container">
      <ProfileCard name={""} age={22} bio={"I'm a full-stack developer who enjoys turning ideas into real, usable web apps. Skilled in JavaScript, React, Node.js, and always learning more."}/>
      <ProfileCard name={"Akash Kumar"} age={23} bio={"Passionate software engineer focused on building user-friendly web apps with clean code, scalable architecture, and a love for solving problems."}/>
      <ProfileCard name={"Rahul Kumar"} age={25} bio={""}/>
      </div>
    </>
  )
}

export default App
