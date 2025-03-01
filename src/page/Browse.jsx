import React, { useContext, useEffect } from 'react'

import '../index.css';
import AuthContext from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';


const Browse = () => {
  const { authUser } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (!authUser) {
      navigate('/');  // Redirect to login if not authenticated
    }
  },[authUser, navigate]);

  return (
    <>
      <Header/>
     <p>list of movies .....</p>
    </>

  )
}

export default Browse