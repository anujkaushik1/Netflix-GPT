import React from "react";
import { MoviesList } from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesData = useSelector((store) => store.movies);
  const { nowPlayingMovies } = moviesData || [];

  return (
    <div className='bg-[black]'>
      <MoviesList title={"Now Playing"} moviesData={nowPlayingMovies} />
      <MoviesList title={"hahah title2"} moviesData={nowPlayingMovies} />
      <MoviesList title={"hahah title3"} moviesData={nowPlayingMovies} />
      <MoviesList title={"hahah title4"} moviesData={nowPlayingMovies} />
      <MoviesList title={"hahah title5"} moviesData={nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
