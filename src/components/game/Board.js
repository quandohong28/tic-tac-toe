import React from 'react'
import Cell from './Cell'

export default function Board({cells, onClick}) {

    // test:
    // const test = [
    //     'a', null, null, 'x', 'x', 'x', 'b', null, null
    // ]
    // 
    // console.log(findWinner(test));

    return (
        <div className='game-board'>
            {cells.map((cell, index) => {
                return <Cell onClick={() => onClick(index)} key={index} value={cell} />
            })}
        </div>
    )
}
