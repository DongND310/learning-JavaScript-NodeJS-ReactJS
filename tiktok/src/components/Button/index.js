import style from './Button.module.css';
import React from 'react';

function Button() {
    return (
        <>
        <button className={style.button}>
            Button1
        </button>
        <button className={`${style.button} ${style.active}`}>
            Button2
        </button>

        </>
        
    )
}
export default Button