import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard';

import { Div, UL, LI, ImageBanner, Title, Year } from './MovieListStyledCmp';

function MovieListing() {
    const movieData = useSelector(state => state.Movies.MoviesArr);
    console.log(movieData.Search);

    let allMovieDetails = '';
    allMovieDetails = movieData.Response === 'True' ? (
        movieData.Search.map((data, index) => (
            <MovieCard key={index} movies={data}/>
        ))
    ) : (<div>
        <h1>{movieData.Error}</h1>
    </div>)

  return (
    <Div>
        <Title>Movies</Title>
        <Div>{allMovieDetails}</Div>
    </Div>
  )
}

export default MovieListing