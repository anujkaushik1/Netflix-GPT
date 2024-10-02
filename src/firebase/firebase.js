// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoTE5ZMGfr3jJ_18Q1jCy3s-aCg5r7nJU",
  authDomain: "netflix-gpt-883cd.firebaseapp.com",
  projectId: "netflix-gpt-883cd",
  storageBucket: "netflix-gpt-883cd.appspot.com",
  messagingSenderId: "825459909633",
  appId: "1:825459909633:web:02b2579d3e8b3447974c00",
  measurementId: "G-75NLDHSFRX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

export const firebaseApi = {
  signUpWithEmailPassword: createUserWithEmailAndPassword,
  signInWithEmailPassword: signInWithEmailAndPassword,
};
