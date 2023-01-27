import React, { useState } from 'react';
import MovieItem from './MovieItem';
import styles from './MovieList.module.css';

function MovieList(props) {
    const [movies, setMovies] = useState(props.movies);

    function searchHandler(event) {
        const updatedList = props.movies.filter(movie => movie.title.includes(event.target.value.slice(0, 1).toUpperCase() + event.target.value.slice(1).toLowerCase()) || movie.title.includes(event.target.value) || movie.directedBy.includes(event.target.value.slice(0, 1).toUpperCase() + event.target.value.slice(1).toLowerCase()) || movie.directedBy.includes(event.target.value));

        setMovies(updatedList);
    }

    return (
        <div className={styles.MovieListDiv}>
            <input onChange={searchHandler} type="text" className={styles.Search} placeholder='Search by name or director name' />
            <ul className={styles.List}>
                {movies.map((movie) => {
                    return <MovieItem key={movie.id} id={movie.id} title={movie.title} img={movie.img} desc={movie.desc} directedBy={movie.directedBy} onLoad={props.onLoad} />
                })}
            </ul>
        </div>
    )
}

export default MovieList;