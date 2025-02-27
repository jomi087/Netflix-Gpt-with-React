import React, { useContext, useEffect } from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import '../index.css';
import AuthContext from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';


const Browse = () => {
  const { authUser, logout } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (!authUser) {
      navigate('/'); // Redirect to login if not authenticated
    }
  }, [authUser, navigate]);

  const handleSignOutButton = ()=>{
    console.log("clicked");
    signOut(auth).then(() => {
      navigate("/");
    });
     
  } 
  return (
    <>
      <h1 className="text-red-700">hlo</h1>
      <button  onClick={handleSignOutButton}>button</button>
    </>

  )
}

export default Browse