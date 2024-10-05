import React from "react";

const MovieCard = ({ img }) => {
  return (
    <div className="mr-2 min-w-40 min-h-48">
        <img className="w-36" src={img}/>
    </div>
  );
};

export default MovieCard;
