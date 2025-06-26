import { useState } from 'react'
import './App.css'
import ToggleButton from './components/ToggleButton'

function App() {
  const facts = [
    "Bananas are berries, but strawberries are not.",
    "Octopuses have three hearts and blue blood.",
    "The Eiffel Tower can grow over 6 inches taller in the summer due to metal expansion.",
    "Honey never spoils. Archaeologists have found 3000-year-old honey that's still edible.",
    "There are more stars in the universe than grains of sand on all Earth's beaches.",
    "Sharks existed before trees – by about 200 million years.",
    "A bolt of lightning is five times hotter than the surface of the sun.",
    "The longest-living cells in your body are brain cells, which can last a lifetime.",
    "Wombat poop is cube-shaped.",
    "The first computer virus was created in 1986 and was called 'Brain'.",
    "Sloths can hold their breath longer than dolphins — up to 40 minutes.",
    "There's enough DNA in the human body to stretch from the Earth to the Sun and back — about 600 times.",
    "The Great Wall of China is not visible from space with the naked eye.",
    "Hot water freezes faster than cold water under certain conditions — this is called the Mpemba effect.",
    "A day on Venus is longer than a year on Venus."
  ];
  
  return (
    <>
     <ToggleButton facts={facts}/>
    </>
  )
}

export default App
