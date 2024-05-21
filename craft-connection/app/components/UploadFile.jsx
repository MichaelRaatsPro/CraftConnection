"use client"
import React, { useState } from 'react';

const UploadFile = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(URL.createObjectURL(file));
    }
  };

  return (
    <form className="max-w-lg mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload file</label>
      <input 
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
        aria-describedby="user_avatar_help" 
        id="user_avatar" 
        type="file" 
        onChange={handleFileChange}
      />
      <div className="mt-1 text-sm text-black-500 dark:text-black-300" id="user_avatar_help">
        
      </div>
    </form>
  );
};

export default UploadFile;
