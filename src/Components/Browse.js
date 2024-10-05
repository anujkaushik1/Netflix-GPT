import React from 'react'
import useNowPlayingMoviesData from '../hooks/useNowPlayingMoviesData';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


export const Browse = () => {

  useNowPlayingMoviesData();

  

  return (
    <div>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}


export default Browse;