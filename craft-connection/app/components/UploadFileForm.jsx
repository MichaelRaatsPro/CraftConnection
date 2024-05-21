//uploadFileForm 
"use client"
import React, { useState } from "react";

const UploadFileForm = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      onFileUpload(selectedFile, fileUrl);
      setFile(selectedFile);
    }
  };

  return (
    <input type="file" onChange={handleFileChange} style = {{paddingBottom: "20px"}}/>
  );
};

export default UploadFileForm;
