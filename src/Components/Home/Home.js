import React, { useEffect } from 'react'
import { Div, WelcomeText } from './HomeStyledCmp'
import MovieApi from '../API/MovieApi'
import { ApiKeyValue } from '../API/MovieApiKey'
import MovieListing from '../MovieListing/MovieListing'


import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { movieActions } from '../../Redux/MovieSlice'


function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        const movieText = 'Harry';
        const fetchMovies = async() => {
            let response = await MovieApi.get(`?ApiKey=${ApiKeyValue}&s=${movieText}&type=movie`)
            .catch((err)=>{
                console.log('Err' + err);
            });
            console.log(response);
            dispatch(movieActions.fetchMovies(response.data));
        }
        fetchMovies();
    },[]);
  return (
    <Div>
        <WelcomeText>Welcome to Movie App!</WelcomeText>

        <MovieListing/>
    </Div>
  )
}

export default Home