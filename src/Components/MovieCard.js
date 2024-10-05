import React from "react";

const MovieCard = ({ img }) => {
  return (
    <div className="mr-6 min-w-48 min-h-48">
        <img className="w-48 rounded-md" src={img}/>
    </div>
  );
};

export default MovieCard;
