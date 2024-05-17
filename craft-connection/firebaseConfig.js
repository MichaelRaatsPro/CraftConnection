// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdcqPxOZnrnaXFh4z5aP2nHkCFUAfgmGw",
  authDomain: "craftconnection-33801.firebaseapp.com",
  projectId: "craftconnection-33801",
  storageBucket: "craftconnection-33801.appspot.com",
  messagingSenderId: "900329611168",
  appId: "1:900329611168:web:8a915704e280e0eb168ec5",
  measurementId: "G-ZPJTY2K553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };