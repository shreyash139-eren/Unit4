// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMkc9UUCRtjsmHWPCg0-JpWgRlmtzupz8",
  authDomain: "mindtracker-4a623.firebaseapp.com",
  projectId: "mindtracker-4a623",
  storageBucket: "mindtracker-4a623.firebasestorage.app",
  messagingSenderId: "365858617577",
  appId: "1:365858617577:web:037c0a4f43aafcc9511878",
  measurementId: "G-7K28SP750F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}