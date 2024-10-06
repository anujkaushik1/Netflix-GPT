import React from "react";
import SearchBar from "./SearchBar";
import LangagesOptions from "./LangagesOptions";
import RecommendedMovies from "./RecommendedMovies";

const SearchPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-1 justify-end">
        <LangagesOptions />
      </div>
      <SearchBar />
      <RecommendedMovies/>

    </div>
  );
};

export default SearchPage;
