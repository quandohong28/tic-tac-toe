import React, { useRef, useState } from 'react'
import Board from './Board'
import './style.css'
import { findWinner } from './logic'

var x = 0;
var o = 0;

export default function Game() {
  const initEmptyBoard = Array(9).fill(null)
  const [board, setBoard] = useState(initEmptyBoard)
  const [isNext, setIsNext] = useState(true)
  const winner = findWinner(board)

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return
    boardCopy[index] = isNext ? 'x' : 'o';
    setBoard(boardCopy)
    setIsNext(!isNext)
  }

  if (winner) {
    // alert(!isNext ? 'X is Winner' : 'O is Winner')
    if(!isNext) {
      alert('X is Winner')
      x++
    }
    else {
      alert('O is Winner')
      o++
    }
  }



  const handleReset = () => {
    setBoard(initEmptyBoard)
    setIsNext(true)
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
          <h4 style={{ display: 'inline', marginRight: '100px' }}>X: {x} points</h4>
          <h4 style={{ display: 'inline' }}>O: {o} points</h4>
        </div>
      </>
    </div>
  )
}
