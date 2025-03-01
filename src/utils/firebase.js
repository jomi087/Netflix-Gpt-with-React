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
  apiKey:             import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:         import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:          import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:      import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:              import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId:      import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
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