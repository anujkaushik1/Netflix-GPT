import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const moviesData = useSelector((store) => store.movies?.nowPlayingMovies);

  const {id, original_title, overview} = moviesData?.[1] || {} ;
  

  return (
    <div className=''>
        <VideoTitle title = {original_title} desc = {overview}/>
        <VideoBackground id={id}/>
        
    </div>
  )
}

export default MainContainer