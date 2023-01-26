import React from 'react';
import Card from '../UI/Card';
import styles from './Content.module.css';

export default function Content(props) {
  return (
      <Card className={styles.Content}>
        <div>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
        <div>
          <img src={props.img} alt={props.title} />
        </div>
      </Card>
  )
}
