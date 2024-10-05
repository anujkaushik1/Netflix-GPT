import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: []
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload || [];
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload || [];
    }
  },
});

export const { addNowPlayingMovies, addPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;
