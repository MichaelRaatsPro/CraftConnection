//landing page
import Post from "./components/Post";
import React, { useContext } from "react";
import "../firebaseConfig.js";
import "./pageStyles.css"
import SignInForm from "./components/SignInForm";

export default function Home() {
  return (
    <>
      <div className = "landing" style = {{ display: 'flex', justifyContent: 'center'}}>
        <SignInForm/>
      </div>
    </>
  );
}
