import { createContext,useState,useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault,generateWordSet } from './components/Words';
import Gameover from './components/Gameover';

export const AppContext = createContext();

function App() {
  const [board, setboard] = useState(boardDefault);
  const [currAttempt,setCurrAttempt] = useState({row:0,col:0});

  const [wordSet,setWordSet] = useState(new Set());
  const [gameState, setGameState] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [correctWord, setCorrectWord] = useState("");


  const onSelect = (keyVal)=>{
    if(currAttempt.col > 4) return ; 
        
        const newBoard = [...board];
        newBoard[currAttempt.row][currAttempt.col] = keyVal ;
        setboard(newBoard);
        setCurrAttempt({...currAttempt,col:currAttempt.col+1})
  }

  const onEnter = ()=>{
      if(currAttempt.col !== 5) return ;

      let currWord = "" ;
      for(let i=0;i<5;i++){
          currWord+=board[currAttempt.row][i] ;
      }

      if(wordSet.has(currWord.toLowerCase())){
          setCurrAttempt({row:currAttempt.row+1,col:0});
      }
      else{
          alert("Word not found");

          setCurrAttempt({row:currAttempt.row+1,col:0});
      }

      if (currWord.toLowerCase() === correctWord) {
        setGameState({ gameOver: true, guessedWord: true });
        return;
      }

      if (currAttempt.row === 5) {
        setGameState({ gameOver: true, guessedWord: false });
        return;
      }
  }

  const onDelete = (keyVal)=>{
    if(currAttempt.col===0) return ;

    const newBoard = [...board];
    newBoard[currAttempt.row][currAttempt.col-1] = "" ;
    setboard(newBoard);

    setCurrAttempt({...currAttempt,col:currAttempt.col-1});
  }

  useEffect(() => {
    generateWordSet().then((words)=>{
      setWordSet(words.wordSet);
      console.log(words.todaysWord);
      setCorrectWord(words.todaysWord);
    })
  }, [])
  

  return (
    <div className="App">
      <nav><h1>Wordiefy</h1></nav>
      <AppContext.Provider value={{board,setboard,correctWord,currAttempt,setCurrAttempt,onSelect,onEnter,onDelete,gameState,setGameState}}>
      <div className='game'>
      <Board></Board>
      {gameState.gameOver ? <Gameover /> : <Keyboard />}
      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
