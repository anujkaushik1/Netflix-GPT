import React from "react";
import MovieCard from "./MovieCard";
import { getMovieImage } from "../utils/constants";

export const MoviesList = ({ title, moviesData = [] }) => {
  console.log("hey = ", title);

  return (
    <div className="ml-6 font-sans relative bottom-28 bg-none">
      <h1 className="text-2xl font-semibold text-white">{title}</h1>

      <div className="relative mt-4">
        <div className="flex overflow-scroll no-scrollbar">
          {moviesData.map((movie) => {
            {
             return !!movie?.poster_path && (
                <MovieCard img={getMovieImage(movie?.poster_path)} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
