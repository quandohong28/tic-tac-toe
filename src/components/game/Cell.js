import React, { useRef } from 'react'

export default function Cell({ value, onClick }) {
    const cell = useRef(null)
    if (value === 'x') {
        cell.current.style.color = 'blue'
    }

    else if (value === 'o')
        cell.current.style.color = 'red'


    return (
        <div
            className='game-cell'
            onClick={onClick}
            ref={cell}
        >
            {value}
        </div>
    )
}
