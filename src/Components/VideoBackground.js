import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";
const VideoBackground = () => {
  const moviesData = useSelector((store) => store.movies?.nowPlayingMovies);
  const trailerInfo = useTrailerVideo({ trailerId: moviesData[2]?.id });

  if (trailerInfo?.success === false) {
    return;
  }

  const youtubeInfo = trailerInfo?.results?.find((video) =>
    ["Trailer", "Teaser"].includes(video?.type)
  );

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${youtubeInfo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
