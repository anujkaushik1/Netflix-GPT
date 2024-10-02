import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/slices/movies";
import { TMDB_API_OPTIONS } from "../utils/constants";

const useNowPlayingMoviesData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNowPlayingMovie();
  }, []);

  const fetchNowPlayingMovie = async () => {
    try {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
      const options = TMDB_API_OPTIONS;

      const resp = await (await fetch(url, options)).json();
      dispatch(addNowPlayingMovies(resp?.results || []));
    } catch (error) {}
  };
  

};

export default useNowPlayingMoviesData;
