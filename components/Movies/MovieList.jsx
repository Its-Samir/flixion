import React, { useState } from 'react';
import movieData from '@/dummy_data';
// import {movieData} from '@/pages';
import MovieItem from './MovieItem';
import styles from './MovieList.module.css';

function MovieList(props) {
    const [movies, setMovies] = useState(movieData);

    function searchHandler(event) {
        const updatedList = movieData.filter(movie => movie.title.includes(event.target.value.slice(0, 1).toUpperCase() + event.target.value.slice(1).toLowerCase()) || movie.title.includes(event.target.value));

        setMovies(updatedList);
    }

    return (
        <div className={styles.MovieListDiv}>
            <input onChange={searchHandler} type="text" className={styles.Search} placeholder='Search movies by name' />
            <ul className={styles.List}>
                {movies.map((movie) => {
                    return <MovieItem key={movie.id} id={movie.id} title={movie.title} img={movie.img} desc={movie.desc} directedBy={movie.directedBy} onLoad={props.onLoad} />
                })}
            </ul>
        </div>
    )
}

export default MovieList;