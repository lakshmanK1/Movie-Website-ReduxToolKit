import { configureStore } from "@reduxjs/toolkit";

import movieReducer from './MovieSlice'

export const Store = configureStore({
    reducer:{Movies:movieReducer}
})