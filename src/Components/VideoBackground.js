import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
const VideoBackground = ({ id }) => {
  const trailerInfo = useTrailerVideo({ trailerId: id });

  if (trailerInfo?.success === false) {
    return;
  }

  const youtubeInfo = trailerInfo?.results?.find((video) =>
    ["Trailer", "Teaser"].includes(video?.type)
  );

  return (
    <div>
      <iframe
        className="min-w-[100%] h-[100vh]  aspect-video overflow-hidden"
        src={`https://www.youtube.com/embed/${youtubeInfo?.key}?autoplay=1&mute=true&controls=0`}
        title="YouTube video player"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
