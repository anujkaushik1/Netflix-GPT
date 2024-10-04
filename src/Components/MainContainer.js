import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const moviesData = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    <div>
        <VideoTitle/>
        <VideoBackground moviesData={moviesData}/>
    </div>
  )
}

export default MainContainer