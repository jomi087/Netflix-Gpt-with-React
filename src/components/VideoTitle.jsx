import React from 'react'

const VideoTitle = ({movieName,info}) => {
  
  return (
    <div className=" w-screen aspect-video pt-44 px-10 absolute text-white bg-gradient-to-r from-black">     
      <h1 className="text-4xl font-bold opacity-70 hover:opacity-95 ">{movieName}</h1>
      <p className='py-6 w-1/4 text-sm tracking-wide opacity-65'>{info}</p>
      <div className="">
        <button className=" bg-white text-black p-3 px-5 text-xl font-semibold rounded-lg opacity-70 hover:opacity-85"> ▶ Play</button>
        <button className="mx-3 bg-gray-600 text-white p-3 px-4 text-xl font-semibold rounded-lg opacity-70 hover:opacity-95" >More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle