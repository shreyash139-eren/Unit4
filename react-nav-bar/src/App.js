import './App.css';
import React, { useState } from 'react';

function Nav({ setActive }) {
  return (
    <nav>
      <button onClick={() => setActive("Home")}>Home</button>
      <button onClick={() => setActive("About")}>About</button>
      <button onClick={() => setActive("Contact Us")}>Contact Us</button>
    </nav>
  );
}

function App() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <Nav setActive={setActive} />
      {active === "Home" && <h1>Welcome to Home Page</h1>}
      {active === "About" && <h1>About Us</h1>}
      {active === "Contact Us" && <h1>Contact Us</h1>}
    </>
  );
}

export default App;
