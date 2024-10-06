import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    recommendedMovies: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload || [];
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload || [];
    },
    addRecommendedMovies: (state, action) => {
      state.recommendedMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addPopularMovies, addRecommendedMovies } = movieSlice.actions;
export default movieSlice.reducer;
