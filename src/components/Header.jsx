import React, { useContext } from 'react'

import  netflixLogo from '../assets/Netflix-logo.png'
import  UserInfo from '../assets/profile_img.png'
import { auth } from '../utils/firebase'
import AuthContext from '../context/AuthContext'
import { SUPPORTED_LANGUAGES } from '../utils/constants'
import LanguageContext from '../context/LanguageContext'
import SearchContext from '../context/SearchContext'



import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';





const Header = () => {

  const navigate = useNavigate()
  const {authUser} = useContext(AuthContext)
  const {setLanguage} = useContext(LanguageContext)
  const {search,setSearch} = useContext(SearchContext)

  
  const handleSignOutButton = ()=>{
    // console.log("clicked");
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error)=>{
       toast.error("Failed to sign out. Please try again."); 
    })
      
  } 

  const handleLanguageChange = (e)=>{
    setLanguage(e.target.value)
  }

  const handleGptSearchClick = ()=>{
    setSearch(!search)
  }


  return (
    <>
      <div className={`absolute ${authUser ? "py-6 px-12" : "py-11 px-25"} bg-gradient-to-b from-black z-10 w-screen flex justify-between`} >
          <img 
            src={netflixLogo} 
            className={authUser ? "w-28 h-9" : "w-44"}
            alt="logo-Netflix"
          />
        { authUser && 
          <div className='flex p-2'>
    
              {search && 
                <select 
                  onChange = {handleLanguageChange}
                  className="text-white  ">
                  {SUPPORTED_LANGUAGES.map((lang)=>{
                      return <option className="text-black " key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                  })}
                </select>
              }

            <button 
              className="bg-cyan-600 text-white rounded-lg mx-4 px-2 my-1  cursor-pointer opacity-75 font-bold "
              onClick={handleGptSearchClick}>
                {!search ? "🔍 Movies" : " Home 🛖"}
            </button>
            <img className='w-8 h-8 m-1'  src={UserInfo} alt="profileIcon" />
            <button className='font-bold text-white' onClick={handleSignOutButton}>(Sign Out)</button>
          </div>
        }
      </div>

    </>
  )
}

export default Header