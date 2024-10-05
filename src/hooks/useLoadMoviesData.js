import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../store/slices/movies";
import { TMDB_API_OPTIONS } from "../utils/constants";

const useLoadMoviesData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies();
  }, []);
  const loadMoviePromise = async (title) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${title}?language=en-US&page=1`;
      const options = TMDB_API_OPTIONS;

      const resp = (await (await fetch(url, options)).json())?.results || [];
      return resp;
    } catch (error) {
      throw error;
    }
  };

  const fetchMovies = async () => {
    try {
      const resolvedMoviePromises = await Promise.allSettled([
        loadMoviePromise("now_playing"),
        loadMoviePromise("popular"),
      ]);

      resolvedMoviePromises[0].status == "fulfilled" &&
        dispatch(addNowPlayingMovies(resolvedMoviePromises[0].value || []));

      resolvedMoviePromises[1].status == "fulfilled" &&
        dispatch(addPopularMovies(resolvedMoviePromises[1].value || []));
    } catch (error) {}
  };
};

export default useLoadMoviesData;
