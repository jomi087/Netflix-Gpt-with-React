import React from 'react'
import  netflixLogo from '../assets/Netflix-logo.png'


const Header = () => {
  return (
    <>
      <div className="absolute px-40 py-7 bg-gradient-to-b from-black z-10">
          <img 
            src={netflixLogo} 
            className="w-40"
            alt="logo-Netflix"
            />
      </div>

    </>
  )
}

export default Header