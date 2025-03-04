
import { useContext, useEffect, useRef, useState } from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";  // be sure u want setDoc or addDoc
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { emailpasswordvalidation , namevalidation } from '../utils/validation'
import AuthContext from "../context/AuthContext";
import {auth,db} from '../utils/firebase'
import { BG_IMG } from '../utils/constants';

const Login = () => {

  const [signInForm,setSignInForm]=useState(true)
  //const [errorMsg,setErrorMsg] = useState(null) // avoided errorMsg cz of tostify 

  const nameInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)

  const { authUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (authUser) {
      navigate('/browse');  // Navigate only after component mounts
    }
  }, [authUser, navigate]); 


  const toggleForm = ()=>{  //toggling signin and sign up form using 1 single form
    setSignInForm(!signInForm)
  }


  const handleButtonClick = (event) => {
    event.preventDefault();

    let error = null;
    if (!signInForm) {
      error = namevalidation(nameInputRef.current?.value);
    }
    if (!error) {
      error = emailpasswordvalidation(emailInputRef.current?.value,passwordInputRef.current?.value);
    }
    // setErrorMsg(error);
    if(error) {
      toast.error(error)
      return ;
    }  


    //firebase authentication         /* i have written this for a understanding how evr next time i recommend to write in separete module and invoke it and use async await that is much more clean to read */
    if(!signInForm){ 
      //Signup logic from fireBase
      createUserWithEmailAndPassword(auth,emailInputRef.current?.value,passwordInputRef.current?.value) //https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
      .then((userCredential) => {  //Signup succesfull
        const user = userCredential.user;

        // Update the user profile with the display name
        return  updateProfile(user, {
          displayName: nameInputRef.current?.value
        })
        .then(()=>{
          // Save user data in Firestore
          return setDoc(doc(db, "users", user.uid), {  //https://firebase.google.com/docs/firestore/manage-data/add-data#set_a_document
            name: nameInputRef.current?.value,
            email: user.email,
          });
        })
      })
      .catch((error) => { //Signup failed
        const errorCode = error.code;
        toast.error(errorCode.split('/')[1])
        //setErrorMsg(errorCode)
      }); 

    }else{  
      //SignIn logic from firbase
      signInWithEmailAndPassword(auth,emailInputRef.current?.value,passwordInputRef.current?.value) // https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
      .then((userCredential) => {   // Signin  successfully
        // console.log(userCredential.user)
        navigate("/browse");
    
      })
      .catch((error) => {   //SignIn failed
        const errorCode = error.code;
        toast.error(errorCode.split('/')[1])
        // setErrorMsg(errorCode.split('/')[1].toUpperCase())
      });

    }

  };

  return (
    <div className="relative h-screen w-screen">
      <Header/>

      <div className="absolute inset-0">
        <img
          src={BG_IMG}
          alt="netflix-bg-img"
          className="w-full h-full object-cover"
        />
      </div>

      <div className={`flex justify-center items-center h-screen ${ signInForm ? "pt-18" : "pt-12" }`}>
        <form className="relative bg-black opacity-80 text-white p-8 rounded-lg w-[450px] shadow-lg ">
          <h1 className="font-bold text-3xl pb-6 text-start">{ signInForm ? "Sign In" : "Sign Up" }</h1>

          {!signInForm && (
            <input 
              type="text" 
              ref={nameInputRef}
              placeholder="Full Name" 
              className="p-3 my-2 w-full bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          />)}
          
          <input 
            type="text" 
            ref={emailInputRef}
            placeholder="Email Address" 
            className="p-3 my-2 w-full bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          
          <input 
            type="text" 
            ref={passwordInputRef}
            placeholder="Password" 
            className="p-3 my-2 w-full bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* <p className="text-red-500 font-bold p-2">{errorMsg}</p> */}

          <button className="p-3 my-4 bg-red-600 w-full rounded font-semibold hover:bg-red-700 transition"
          onClick={handleButtonClick}
          >
          { signInForm ? "Sign In" : "Sign Up" }
          </button>

          <p className="text-gray-400 text-center mt-3">Forgot password</p>

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
