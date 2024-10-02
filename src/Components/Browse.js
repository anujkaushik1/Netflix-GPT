import React from 'react'
import useNowPlayingMoviesData from '../hooks/useNowPlayingMoviesData';
import MainContainer from './MainContainer';


export const Browse = () => {

  useNowPlayingMoviesData();

  

  return (
    <div>
        <MainContainer/>
    </div>
  )
}


export default Browse;