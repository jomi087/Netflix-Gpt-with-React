
import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'
import a from '../assets/TMDB.svg'

const VideoBackground = ({movieId}) => {
    const [trailerId ,setTrailerId] = useState(null)

    useEffect(()=>{
        const getMovieVideos = async ()=>{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS)
            const data = await response.json()
            // console.log("data" ,data)
 
            const trailerData = data.results.filter((video)=>{
                return video.type === "Trailer"
            })
            // console.log("trailerData",trailerData)
            const trailer = trailerData.length ? trailerData[0] : data.results[0] ;
            // console.log("trailer",trailer)
            setTrailerId(trailer?.key)
        }
        getMovieVideos()
    },[movieId])
  return (
    <>
        { trailerId ? (
                <div className="w-screen">
                    <iframe 
                        className="w-screen aspect-video "
                        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&loop=1&playlist=${trailerId}&controls=0&vq=hd1080`}
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        referrerPolicy="strict-origin-when-cross-origin" 
                    ></iframe> 
                </div>

            ):(
                <div className="flex justify-center items-center  h-screen">
                    <img className="w-3xl pb-50" src={a} alt="" />
                </div>
            )
        }
    </>
  )
}

export default VideoBackground