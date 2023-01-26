import React from 'react';
import styles from './Input.module.css';

function Input() {
    return (
        <>
            <input className={styles.Input} type="text" placeholder='Enter your email' />
            <button className={styles.GetStartedBtn}>Get Started</button>
        </>
    )
}

export default Input;