import React, { useContext } from 'react'
import { AppContext } from '../App';

const Gameover = () => {
    const {
        currAttempt,
        gameState,
        correctWord,
      } = useContext(AppContext);
    return (
    <div className='gameOver'>
      <h3>
        {gameState.guessedWord
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameState.guessedWord && (
        <h3>You guessed in {currAttempt.row} attempts</h3>
      )}
    </div>
  )
}

export default Gameover