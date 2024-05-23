"use client"
import React, { useContext } from "react";
import Link from "next/link";
import "../globals.css";
import { SpeechContext } from "./SpeechContext.jsx";
import signIn from "../firebase/signIn.jsx"; // Import the signIn function

const SignInForm = () =>{
  const { setSpeechMessage } = useContext(SpeechContext);

  const handleSignIn = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const email = event.target.email.value;
    const password = event.target.password.value;

    // Call signIn function with email, password, and setSpeechMessage
    await signIn(email, password, setSpeechMessage);
  };

  return (
    <div className="flex justify-center  h-screen">
      <section
        className="bg-gray-50 dark:bg-gray-900"
        style={{ background: "none", padding: "0"}} // Removed 'top: 0'
      >
        <div className="flex flex-col mx-auto md:h-auto py-10 w-full sm:w-96"> {/* here is where the width is being set */}
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div
              className="p-6 space-y-4 md:space-y-6 sm:p-8"
              style={{ borderRadius: "10px", border: "solid black", background:  "#73C0E8"
            }}
            >
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign In
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit = {handleSignIn}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-black-500 dark:text-black-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  style={{ backgroundColor: "#194667" }}
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-black-500 dark:text-black-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/createProfile"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignInForm;
