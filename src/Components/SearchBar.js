import React, { useState } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { chatCompletion } from "../openAI";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addRecommendedMovies } from "../store/slices/movies";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const selectedLanguage = useSelector(
    (store) => store.config?.selectedLanguage || "en"
  );
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleSearch = async () => {
    const gptQuery =
      "Act like a movie recommendation system give me the 5 movies based on the query given below, output should be comma seperated like: Raone, Shazam, Avengers End Game, Avengers Infinity war, Yeh Jawaani Hai Deewani, query: " +
      searchInput;

    // const chatCompletionResponse = await chatCompletion(gptQuery);

    // it will give result likme ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

    const moviesSuggestion = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Chupke Chupke",
      "Jaane Bhi Do Yaaro",
      "Padosan",
    ];

    const searchedMovieResults = (
      await Promise.allSettled(
        moviesSuggestion.map((movie) => searchMovieTMDB(movie))
      )
    )
      .map((resolvedMovie) =>
        resolvedMovie.status == "fulfilled" ? resolvedMovie.value : undefined
      )
      .filter(Boolean);

    dispatch(addRecommendedMovies(searchedMovieResults));
  };

  return (
    <div className="flex justify-center items-center mt-[10%] font-sans">
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        className="border-2 border-black rounded-md w-1/2 p-4"
        placeholder={lang?.[selectedLanguage]?.gptPlaceHolderText}
      ></input>

      <button
        onClick={handleSearch}
        className="p-4 px-8 bg-red-800 m-4 rounded-md text-white font-bold cursor-pointer hover:bg-red-900"
      >
        {lang?.[selectedLanguage]?.search}
      </button>
    </div>
  );
};

export default SearchBar;
