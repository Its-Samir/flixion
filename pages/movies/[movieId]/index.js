// import MovieItem from '@/components/Movies/MovieItem';
import MovieDetails from '@/components/Movies/MovieDetails';
import Navbar from '@/components/Navbar/Navbar';
import movieData from '@/dummy_data';
// import { movieData } from '@/pages';
import React from 'react';

function Movie(props) {
  return (
    <>
      <Navbar />
      <MovieDetails key={props.id} id={props.id} title={props.title} img={props.img} desc={props.desc} directedBy={props.directedBy} />
    </>
  )
}


export async function getStaticPaths() {
  const movies = movieData.map((movie) => ({ params: { movieId: movie.id.toString() } }));

  return {
    paths: movies,
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const movieId = context.params.movieId;

  const currMovie = movieData.find((movie) => {
    return movie.id === movieId;
  });


  return {
    props: {
      id: currMovie.id,
      title: currMovie.title,
      img: currMovie.img,
      desc: currMovie.desc,
      directedBy: currMovie.directedBy
    }
  }
}


export default Movie;