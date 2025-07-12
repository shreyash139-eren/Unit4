// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1ekSwYqWgoIKcgXdg4YqCqD1PTIFsmaY",
  authDomain: "projecttracker-1788e.firebaseapp.com",
  projectId: "projecttracker-1788e",
  storageBucket: "projecttracker-1788e.firebasestorage.app",
  messagingSenderId: "591730857688",
  appId: "1:591730857688:web:1d4306ca920c3d3feb69ad",
  measurementId: "G-9111583LDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}