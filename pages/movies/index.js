import MovieList from '@/components/Movies/MovieList';
import Navbar from '@/components/Navbar/Navbar';
import Loading from '@/components/UI/Loading';
import Movie from '@/db/model';
import Head from 'next/head';
import React, { useState } from 'react';

function Movies(props) {
    const [loading, setLoading] = useState(false);
    function loadingHandler(isTrue) {
        setLoading(isTrue);
    }

    return (
        <>
            <Head>
                <title>Flixion | MoviesList</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {loading ? <Loading /> :
                <MovieList movies={props.movies} onLoad={loadingHandler} />
            }
        </>
    )
}

export async function getStaticProps() {
    const movies = await Movie.find({});

    const moviesList = movies.map((movie) => {
        return {
            id: movie._id,
            title: movie.title,
            img: movie.img,
            desc: movie.desc,
            directedBy: movie.directedBy
        }
    })
    return {
        props: {
            movies: JSON.parse(JSON.stringify(moviesList))
        },
        revalidate: 1
    }
}

export default Movies;