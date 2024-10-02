import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/slices/movies";

const useNowPlayingMoviesData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNowPlayingMovie();
  }, []);

  const fetchNowPlayingMovie = async () => {
    try {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTg0ZGY5OGRkYjI5ZjA3YWZlNjVhZjNkYjlhYzkwYyIsIm5iZiI6MTcyNzg5MTE5NC4xMDMxMDIsInN1YiI6IjYyMDEzMDQ0ZDM0ZWIzMDA5ZDI1NzA2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ckjkJ-UM7nCoO8luubR3BSFgMvmIHs8nYLtQgyRfuZ0",
        },
      };

      const resp = await (await fetch(url, options)).json();
      dispatch(addNowPlayingMovies(resp?.results || []));
    } catch (error) {}
  };
};

export default useNowPlayingMoviesData;
