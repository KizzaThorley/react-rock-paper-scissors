import './App.css'
import React from 'react'


function App() {
const [computerGuess, setComputerGuess] = React.useState(Math.floor(Math.random() * 3))
const [playerGuess, setPlayerGuess] = React.useState(null)

const rockPaperScissors = ['Rock', 'Paper', 'Scissors']

  return (
    <div className="game">
      <p>Player 1 chose: <span>{"PLAYER CHOICE GOES HERE"}</span></p>
      <p>Player 2 chose: <span>{"COMPUTER CHOICE HERE"}</span></p>
      <p className="result">{"RESULT GOES HERE"}</p>
      <button>Rock</button>
      <button>Paper</button>
      <button>Scissors</button>
      <button id="reset">reset</button>
    </div>
  )
}


export default App
