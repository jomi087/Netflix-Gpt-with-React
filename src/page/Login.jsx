import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

const Login = () => {
  const [signInForm,setSignInForm]=useState(true)

  const toggleForm = ()=>{  //toggling signin and sign up form using 1 single form
    setSignInForm(!signInForm)
  }
  return (
    <div className="relative h-screen w-screen">
      <Header/>

      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          alt="netflix-bg-img"
          className="w-full h-full object-cover"
        />
      </div>

      <div className={`flex justify-center items-center h-screen ${ signInForm ? "pt-18" : "pt-12" }`}>
        <form className="relative bg-black opacity-80 text-white p-8 rounded-lg w-[450px] shadow-lg ">
          <h1 className="font-bold text-3xl pb-6 text-start">{ signInForm ? "Sign In" : "Sign Up" }</h1>

          {!signInForm && (<input 
            type="text" 
            placeholder="Full Name" 
            className="p-3 my-2 w-full bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          />)}
          
          <input 
            type="text" 
            placeholder="Email Address" 
            className="p-3 my-2 w-full bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            className="p-3 my-2 w-full bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button className="p-3 my-4 bg-red-600 w-full rounded font-semibold hover:bg-red-700 transition">
          { signInForm ? "Sign In" : "Sign Up" }
          </button>

          <p className="text-gray-400 text-center mt-3">forgor password</p>

          <div className="flex justify-between mt-3 text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1"/> Remember me
            </label>
          </div>

          <p className="mt-4 text-gray-400 text-start">
          { signInForm ? "New to Netflix? " : "Alredy registered ! "} 
            <span className="text-white cursor-pointer hover:underline hover:text-blue-400" onClick={toggleForm}>{ signInForm ? "Sign up now" : "Sign in"} </span>
          </p>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
