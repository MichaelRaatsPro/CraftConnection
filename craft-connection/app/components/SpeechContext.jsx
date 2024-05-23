// SpeechContext.js
"use client"
import React, { createContext, useState } from 'react';

export const SpeechContext = createContext();

export const SpeechProvider = ({ children }) => {

  const defaultMessages = [
    "I hope you are having a swell day!",
    "Did you know snails have teeth?",
    "Welcome to CraftConnect!",
    "night market is out gents"
  ]
  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * defaultMessages.length);
    return defaultMessages[randomIndex];
  };

  const [speechMessage, setSpeechMessage] = useState(getRandomMessage);

  return (
    <SpeechContext.Provider value={{ speechMessage, setSpeechMessage }}>
      {children}
    </SpeechContext.Provider>
  );
};

