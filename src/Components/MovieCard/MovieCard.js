import React from 'react'

import { Div, ImageBanner, Title, Year } from './MovieCardStyledCmp';


function MovieCard(props) {
  return (
    <Div>
        <ImageBanner src={props.movies.Poster}/>
        <Title>{props.movies.Title}</Title>
        <Year>{props.movies.Year}</Year>
    </Div> 
  )
}

export default MovieCard
