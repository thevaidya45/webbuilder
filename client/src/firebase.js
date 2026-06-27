// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "siteforge-d06cf.firebaseapp.com",
  projectId: "siteforge-d06cf",
  storageBucket: "siteforge-d06cf.firebasestorage.app",
  messagingSenderId: "834843770156",
  appId: "1:834843770156:web:30b4335fccea7e4165c089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
