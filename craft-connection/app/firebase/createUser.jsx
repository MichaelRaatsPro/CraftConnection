import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";


const handleSignUp = async (username, email, password) => {
  console.log("running CreateUser");
  const handleSignUp = async () => {
    const auth = getAuth();
    const firestore = getFirestore();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user information in Firestore
      await setDoc(doc(firestore, "users", user.uid), {
        username: username,
        email: email,
      });

      console.log('User signed up and additional info stored:', user);
    } catch (error) {
      console.error('Error signing up:', error.code, error.message);
    }
  };

  return (
    <div>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default handleSignUp;
