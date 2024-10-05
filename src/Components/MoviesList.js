import React from "react";
import MovieCard from "./MovieCard";
import { getMovieImage } from "../utils/constants";

export const MoviesList = ({ title, moviesData = [] }) => {
  return (
    <div className="ml-6 font-sans mb-4 relative bottom-28">
      <h1 className="text-2xl font-semibold text-white">{title}</h1>

      <div className="relative ">
        <div className="flex overflow-scroll no-scrollbar">
          {moviesData.map((movie) => (
            <MovieCard img={getMovieImage(movie?.poster_path)} />
          ))}
        </div>
      </div>
    </div>
  );
};
