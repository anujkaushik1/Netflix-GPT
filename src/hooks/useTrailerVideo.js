import { useEffect, useState } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";

const useTrailerVideo = ({ trailerId } = {}) => {

 
  const [trailerInfo, setTrailerInfo] = useState({});

  useEffect(() => {
    if (trailerId) fetchTrailerInformation();
  }, [trailerId]);

  const fetchTrailerInformation = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${trailerId}/videos?language=en-US`;
      const options = TMDB_API_OPTIONS;

      const response = await (await fetch(url, options)).json();
      console.log("hook resp: ", response);
      setTrailerInfo(response);
    } catch (error) {}
  };

  return trailerInfo;
};

export default useTrailerVideo;
