import React, { useEffect, useState } from 'react'
import Board from './Board'
import './style.css'
import { findWinner } from './logic'

export default function Game() {
  const initEmptyBoard = Array(9).fill(null)
  const [board, setBoard] = useState(initEmptyBoard)
  const [isNext, setIsNext] = useState(true)
  const winner = findWinner(board)
  // const [player1, setPlayer1] = useState(0)
  // const [player2, setPlayer2] = useState(0)

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return
    boardCopy[index] = isNext ? 'x' : 'o';
    setBoard(boardCopy)
    setIsNext(!isNext)
  }
  
  if(winner) {
    alert(!isNext ? 'X is winner' : 'O is winner')
    // if(!isNext) {
    //   setPlayer1(player1 + 1)
    // }
    // else {
    //   setPlayer2(player2 + 1)
    // }
  }


  const handleReset = () => {
    setBoard(initEmptyBoard)
  }

  return (
    <div className='game'>
      <>
        <h1>Tic Tac Toe</h1>
        <Board cells={board} onClick={handleClick} />
        <button
          className='game-reset-btn'
          onClick={handleReset}
        >
          Restart
        </button>

        <div className='point'>
          <h3>Point:</h3>
          <h4 style={{display: 'inline', marginRight: '100px'}}>Player 1: {}</h4>
          <h4 style={{display: 'inline'}}>Player 2: {}</h4>
        </div>
      </>
    </div>
  )
}
