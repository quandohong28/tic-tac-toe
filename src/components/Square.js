import React, { useState } from 'react'
import './style.css'

export default function Square({ value, onSquareClick }) {
    const [value, setValue] = useState(null);

    const handleClick = () => {
        setValue('X');
    }

    return (
        <button className='square' onClick={handleClick}>{value}</button>
    )
}
