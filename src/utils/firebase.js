// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; //firestore is a  NoSQL document database

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0JB65XL7ZxGJFBVnxU-mYovJfazdbzWw",
  authDomain: "netflixgpt-498c6.firebaseapp.com",
  projectId: "netflixgpt-498c6",
  storageBucket: "netflixgpt-498c6.firebasestorage.app",
  messagingSenderId: "695915557900",
  appId: "1:695915557900:web:0dcdf97a091e96d67e2a29",
  measurementId: "G-LYXWVJX8FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore
export const db = getFirestore(app);


export const auth = getAuth(app);
 // This const auth = getAuth();;  was not in the firebase cofig ,Though in firbase were - evry time this function was caling   
 // i jst wrote it ower here and export it and were ever-required i jst import it 
 //getAuth(); come from "firebase/auth";  import it in line nuber 4 