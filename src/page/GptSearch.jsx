import React from 'react'
import GptSearchBar from '../components/GptSearchBar'
import GptMovieSuggestion from '../components/GptMovieSuggestion'
import { BG_IMG } from '../utils/constants'


const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img src={BG_IMG} alt="bg-img" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </>
  )
}

export default GptSearch