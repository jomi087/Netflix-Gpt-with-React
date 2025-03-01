import React from 'react'

import  netflixLogo from '../assets/Netflix-logo.png'
import  UserInfo from '../assets/profile_img.png'
import { auth } from '../utils/firebase'

import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Header = () => {

  const navigate = useNavigate()

  const handleSignOutButton = ()=>{
    console.log("clicked");
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error)=>{
       toast.error("Failed to sign out. Please try again."); 
    })
      
  } 
  return (
    <>
      <div className="absolute px-10 py-6 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
          <img 
            src={netflixLogo} 
            className="w-35"
            alt="logo-Netflix"
            />
        <div className='flex p-2'>
          <img className='w-8 h-8 m-1'  src={UserInfo} alt="profileIcon" />
          <button className='font-bold text-white' onClick={handleSignOutButton}>(Sign Out)</button>
        </div>
      </div>

    </>
  )
}

export default Header