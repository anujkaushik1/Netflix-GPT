import React, { useState } from "react";
import useLoadMoviesData from "../hooks/useLoadMoviesData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";
import SearchPage from "./SearchPage";

export const Browse = () => {
  const [searchToggle, setSearchToggle] = useState(false);

  useLoadMoviesData();

  return (
    <div>
      <div className="absolute z-50 text-white bg-purple-600 p-4 rounded-md m-6 cursor-pointer">
        <button onClick={() => setSearchToggle(!searchToggle)}>
          Search Netflix{" "}
        </button>
      </div>

      {searchToggle ? (
        <SearchPage/>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
