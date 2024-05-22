import React, { useState } from "react";
import UploadFileForm from "./UploadFileForm";
import uploadFile from "../firebase/uploadFile";

const NewPost = () => {
  const [fileName, setFileName] = useState(""); // State to store file name
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxCharCount = 300;

  const [preview, setPreview] = useState("/uploadPreview.svg");
  const [fileUrl, setFileUrl] = useState(""); // State to store file URL
  const [file, setFile] = useState(null); // State to store file object

  const handleFileUpload = (file, fileUrl) => { // Receive file object and fileUrl from UploadFileForm
    setPreview(fileUrl);
    setFileUrl(fileUrl);
    setFile(file); // Store the file object
    setFileName(file.name); // Store the file name
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    const desc = e.target.value;
    if (desc.length <= maxCharCount) {
      setDescription(desc);
      setCharCount(desc.length);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setCharCount(0);
  };

  const handleSubmit = () => {
    if (fileUrl && fileName && file) { // Check if fileUrl, fileName, and file are defined
      uploadFile(file, fileName); // Upload file with title
    } else {
      alert("File URL, file name, or file is missing. Please fill in all fields before submitting.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#73C0E8",
        borderRadius: "20px",
        overflow: "hidden",
        border: "solid black",
      }}
    >


      <div
        className="editor mx-auto flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl"
        style={{ width: "80vw", height: "80vh",borderRadius: "20px" }}
      >
        <div className="flex justify-center items-center mb-4">
          <img
            src={preview}
            alt="Preview"
            style={{ height: "300px", width: "300px",borderRadius: "20px",}}
          />
        </div>
        <UploadFileForm onFileUpload={handleFileUpload} />
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none w-full"
          spellCheck="false"
          placeholder="Title"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none w-full"
          spellCheck="false"
          placeholder="Describe everything about this post here"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
        <div className="icons flex text-gray-500 m-2">
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">
            {charCount}/{maxCharCount}
          </div>
        </div>
        <div className="buttons flex">
          <div
            className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            onClick={handleCancel}
          >
            Cancel
          </div>
          <div
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            onClick={handleSubmit}
          >
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
