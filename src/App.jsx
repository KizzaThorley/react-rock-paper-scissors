import './App.css'
import React from 'react'


function App() {
const [computerGuess, setComputerGuess] = React.useState(Math.floor(Math.random() * 3))
const [playerGuess, setPlayerGuess] = React.useState(null)
const rockPaperScissors = ['Rock', 'Paper', 'Scissors']


const playersGuessName = rockPaperScissors[playerGuess]
const computerGuessName = rockPaperScissors[computerGuess]



function updatePlayerGuess(e) {
  if (playersGuessName) {
    return
  } else {
    if (e.target.innerText === 'Rock') {
      setPlayerGuess(0)
    } else if (e.target.innerText === 'Paper') {
      setPlayerGuess(1)
    } else if (e.target.innerText === 'Scissors') {
      setPlayerGuess(2)
    }
  }
  }
  
  function checkWinner() {
    if(playersGuessName === computerGuessName) {
      return 'its a draw'
    } else if (playersGuessName === 'Rock' && computerGuessName === "Scissors") {
      return  'Congrats you Won'
      
    } else if (playersGuessName === 'Paper' && computerGuessName === "Rock") {
      return  'Congrats you Won'
      
    } else if (playersGuessName === 'Scissors' && computerGuessName === "Paper") {
      return  'Congrats you Won'
     
    } else {
      return 'You lost'
    }
  }



function resetGame() {

  setComputerGuess(Math.floor(Math.random() * 3))
  setPlayerGuess(null)
}


  return (
  <div className="game">
    <p>Computer 1 chose: <span>{playersGuessName && computerGuessName}</span></p>
      <p>Player 2 chose: <span>{playersGuessName && playersGuessName}</span></p>
      <p className="result">{playersGuessName && checkWinner()}</p>
      <button onClick={updatePlayerGuess}>Rock</button>
      <button onClick={updatePlayerGuess}>Paper</button>
      <button onClick={updatePlayerGuess}>Scissors</button>
      <button id="reset" onClick={resetGame}>reset</button>
    </div>
  )
}


export default App
