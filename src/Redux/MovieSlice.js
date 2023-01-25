import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:'Movie',
    initialState:{
        MoviesArr : {},
    },
    reducers:{
        fetchMovies : (state, action) => {
            state.MoviesArr = action.payload;
        }
    }
})
export const movieActions = MovieSlice.actions;
export default MovieSlice.reducer;