import React, { useContext } from 'react'

import  netflixLogo from '../assets/Netflix-logo.png'
import  UserInfo from '../assets/profile_img.png'
import { auth } from '../utils/firebase'
import AuthContext from '../context/AuthContext'

import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




const Header = () => {

  const navigate = useNavigate()
  const {authUser} = useContext(AuthContext)

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
      <div className={`absolute ${authUser ? "py-6 px-12" : "py-11 px-25"} bg-gradient-to-b from-black z-10 w-screen flex justify-between`} >
          <img 
            src={netflixLogo} 
            className={authUser ? "w-28 h-9" : "w-44"}
            alt="logo-Netflix"
          />
        { authUser && 
          <div className='flex p-2'>
            <img className='w-8 h-8 m-1'  src={UserInfo} alt="profileIcon" />
            <button className='font-bold text-white' onClick={handleSignOutButton}>(Sign Out)</button>
          </div>
        }
      </div>

    </>
  )
}

export default Header