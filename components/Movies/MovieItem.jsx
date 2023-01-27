import { useRouter } from 'next/router';
import React from 'react';
import styles from './MovieItem.module.css';

function MovieItem(props) {
    const router = useRouter();
    function showDetailsHandler() {
        router.push(`/movies/${props.id}`);
        props.onLoad(true);
    }
    
    return (
        <div className={styles.Movie}>
            <img src={props.img} alt={props.title} />
            <div className={styles.Details}>
                <h4>{props.title}</h4>
                <p>{props.directedBy}</p>
                <button className={styles.DetailBtn} onClick={showDetailsHandler}>Show Details</button>
            </div>
        </div>
    )
}

export default MovieItem;