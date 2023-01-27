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
                <span>directed by {props.directedBy}</span>
                <span>2019 | Season 1 | 9.0 ratings</span>
                <p>{props.desc}</p>
                <button className={styles.WatchBtn}>Start Watching</button>
                <button className={styles.TrailerBtn}>Watch Trailer</button>
            </div>
        </div>
    )
}

export default MovieDetails;