import React from 'react'
import classes from './Loading.module.css';

export default function Loading() {
  return (
    <div className={classes.Loading}><h1>fetching data...</h1></div>
  )
}
