import React from "react";
import { useSelector } from "react-redux";
import { MoviesList } from "./MoviesList";

const RecommendedMovies = () => {
  const recommendedMovies = useSelector(
    (store) => store.movies.recommendedMovies
  );

  return (
    <div className="mt-24">
      {recommendedMovies.map((movieArray) => (
        <MoviesList title={"haha"} moviesData={movieArray} />
      ))}
    </div>
  );
};

export default RecommendedMovies;
