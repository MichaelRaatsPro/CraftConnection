"use client";
import React, { createContext, useContext, useState } from "react";

// Create a context for the user data
const UserContext = createContext();

// Custom hook to access the user context
export const useUser = () => useContext(UserContext);

// User component to store user data
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  
  const updateUser = (userData) => {
       updateProfile(user, userData);
  };

  const clearUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
