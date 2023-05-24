import React, { useRef } from 'react';
import './style.css'

const Theme = () => {
    const a = useRef('a')
    const html = document.querySelector('html')
    const handleClick = () => {
        a.current.classList.toggle('active')
        html.classList.toggle('dark')
    }


    return (
        <div className='theme'>
            <div className='button-area'>
                <div className='switch' onClick={handleClick} ref={a}></div>
            </div>
        </div>
    );
}

export default Theme;
