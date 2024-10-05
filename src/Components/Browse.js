import React from 'react'
import useLoadMoviesData from '../hooks/useLoadMoviesData';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


export const Browse = () => {

  useLoadMoviesData();

  

  return (
    <div>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}


export default Browse;