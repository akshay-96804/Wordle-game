import React, { useContext } from 'react'
import { AppContext } from '../App';


const Letter = ({letterPos,attemptVal}) => {
    const {board,correctWord,currAttempt} = useContext(AppContext);
    const letterPicked = board[attemptVal][letterPos]; 

    // console.log(letterPicked);

    const correct = correctWord.toUpperCase()[letterPos]===letterPicked;
    const almost = !correct && letterPicked!=="" && correctWord.toUpperCase().includes(letterPicked);

    const letterState = currAttempt.row > attemptVal && (correct?"correct":almost?"almost":"error");

    
  return (
    <div className='letter' id={letterState}>{letterPicked}</div>
  )
}

export default Letter