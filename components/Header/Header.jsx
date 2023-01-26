import React from 'react';
import Navbar from '../Navbar/Navbar';
import Input from '../UI/Input';
import styles from './Header.module.css';

export default function Header() {
    return (
        <>
            <header className={styles.Header}>
                <Navbar />
                <div className={styles.HeadContent}>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h4>watch anywhere, cancel anytime.</h4>
                    <p>Ready to watch? Enter your email and lets get started.</p>
                </div>
                <div className={styles.InputDiv}>
                    <Input />
                </div>
            </header>
        </>
    )
}
