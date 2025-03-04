import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({Title,movies}) => {
    // console.log("movie cards",movies)
  return (
    <div className="px-6 ">
        <h1 className ="text-1xl font-serif py-4 pb-0.5 text-white">{Title}</h1>
        <div className="flex overflow-x-scroll scrollbar-none ">
            {movies.map((movie)=>{
                return  <MovieCard key={movie.id} posterPath={movie.poster_path||movie.name}/>
            })}
        </div>
    
        
    </div>

  )
}

export default MovieList


