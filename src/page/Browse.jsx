import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import '../index.css';
import AuthContext from "../context/AuthContext";
import Header from '../components/Header';
import { API_OPTIONS } from '../utils/constants';
import VideoTitle from '../components/VideoTitle';
import VideoBackground from '../components/VideoBackground';
import MovieList from '../components/MovieList';


const Browse = () => {
  const { authUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedmovies, setTopRatedmovies] = useState([]);
  const [upComming, setUpComming] = useState([]);




  useEffect(() => {
    if (!authUser) {
      navigate('/');  // Redirect to login if not authenticated
    }
  },[authUser, navigate]);



  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?page=1',
          API_OPTIONS //passing metadata 
        );
        const data = await response.json();
        setMovies(data.results);

      } catch (error) {
        console.error("Error fetching movies:", error);
        toast.error(error.message)
      } 
    };

    const getPopularMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?page=2',
          API_OPTIONS //passing metadata 
        );
        const data = await response.json();
        setPopularMovies(data.results);

      } catch (error) {
        console.error("Error fetching movies:", error);
        toast.error(error.message)
      } 
    };

    const getTopRatedmovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?page=2',
          API_OPTIONS //passing metadata 
        );
        const data = await response.json();
        setTopRatedmovies(data.results);

      } catch (error) {
        console.error("Error fetching movies:", error);
        toast.error(error.message)
      } 
    };

    const getUpcomingMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming?page=1', 
          API_OPTIONS //passing metadata 
        );
        const data = await response.json();
        setUpComming(data.results);

      } catch (error) {
        console.error("Error fetching movies:", error);
        toast.error(error.message)
      } 
    };
  
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedmovies();
    getUpcomingMovies();


  }, []);

 const mainMovie = movies?.[0] || {};

  // console.log("mainMovie",mainMovie)

  return movies.length === 0 ? (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <h2 className="font-bold text-5xl">Loading....</h2>
      </div>
    </>
   ) : (
    <>
      <Header/>
      <div >       {/* MainContainer */}
        <VideoTitle movieName={mainMovie.original_title} info={mainMovie.overview}/>
        <VideoBackground movieId={mainMovie.id}/>
      </div> 
    <div className="bg-black">
      <div className="-mt-60 relative">      
          <MovieList Title={"Now Playing"} movies={movies}/>
          <MovieList Title={"Up-Comming"} movies={upComming}/>
          <MovieList Title={"Popular"} movies={popularMovies}/>
          <MovieList Title={"Top Rated"} movies={topRatedmovies}/>
        </div>
    </div>
    </>

  )
}

export default Browse
