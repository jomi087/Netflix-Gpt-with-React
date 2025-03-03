 import React from 'react'
import { IMG_CDN } from '../utils/constants'
 
 const MovieCard = ({posterPath}) => {
   return (
    <div className="min-w-[140px] mr-2 hover:scale-105 transition-transform duration-300">
      <img className="rounded-lg text-white" src={IMG_CDN + posterPath} alt={posterPath} />
    </div>
   )
 }
 
 export default MovieCard