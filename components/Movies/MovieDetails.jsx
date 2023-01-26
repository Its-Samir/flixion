import React from 'react';
import styles from './MovieDetails.module.css';

function MovieDetails(props) {
    return (
        <div className={styles.MovieDetails}>
            <div className={styles.ImgDiv}>
                <img src={props.img} alt={props.title} />
            </div>
            <div className={styles.Detail}>
                <h1>{props.title}</h1>
                <span>{props.directedBy}</span>
                <p>{props.desc}</p>
                <button>Buy or Rent</button>
            </div>
        </div>
    )
}

export default MovieDetails;