import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = ({ email, password, username }) => {
  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed up:', user);
        // Additional logic with username if needed
      })
      .catch((error) => {
        console.error('Error signing up:', error.code, error.message);
      });
  };

  return (
    <div>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
