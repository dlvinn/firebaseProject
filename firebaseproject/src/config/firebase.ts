// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSNDR5Ldy-ROSYWTruARC0mXhhSTF9zJg",
  authDomain: "react-course-1be72.firebaseapp.com",
  projectId: "react-course-1be72",
  storageBucket: "react-course-1be72.appspot.com",
  messagingSenderId: "600874545728",
  appId: "1:600874545728:web:00ebeba2a3df3881d7a5a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();