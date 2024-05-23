import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth, app } from '@/firebaseConfig';

const handleSignUp = async (username, email, password, setSpeechMessage) => {
  console.log("running CreateUser");

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Set the display name for the newly created user
    await updateProfile(user, { displayName: username });

    console.log('User signed up and additional info stored:', user);
    setSpeechMessage("Success! Your account has been created!");
  } catch (error) {
    console.error('Error signing up:', error.code, error.message);
    setSpeechMessage(`${error.message}`);
  }
};

export default handleSignUp;
