"use client"
import React, { useContext } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { SpeechContext } from '../components/SpeechContext.jsx';
import { app } from '@/firebaseConfig';

const signIn = async (username, password, setSpeechMessage) => {
  const auth = getAuth(app);
 console.log("signIn running...");
  try {
    const userCredential = await signInWithEmailAndPassword(auth, username, password);
    const user = userCredential.user;

    console.log('User signed in:', user);
    setSpeechMessage("Success! You are now signed in.");
    // You can redirect the user to another page or perform any other action here after successful sign-in.
  } catch (error) {
    console.error('Error signing in:', error.code, error.message);
    setSpeechMessage(`Error: ${error.message}`);
  }
};

export default signIn;
