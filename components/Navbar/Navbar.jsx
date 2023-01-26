import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <h1><Link href='/'>Flixion</Link></h1>
      <ul className={styles.List}>
        <li><Link href="/">Home</Link></li>
        <li><Link href={`/movies`}>Movies</Link></li>
      </ul>
      <button><Link href={`/movies`}>Movies</Link></button>
    </nav>
  )
}

export default Navbar;