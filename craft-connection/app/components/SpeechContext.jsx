// SpeechContext.js
"use client"
import React, { createContext, useState } from 'react';

export const SpeechContext = createContext();

export const SpeechProvider = ({ children }) => {
  const [speechMessage, setSpeechMessage] = useState("");

  return (
    <SpeechContext.Provider value={{ speechMessage, setSpeechMessage }}>
      {children}
    </SpeechContext.Provider>
  );
};

