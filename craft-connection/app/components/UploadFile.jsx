import React from 'react';

const UploadFile = () => {
  return (
    <form className="max-w-lg mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload file</label>
      <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
      <div className="mt-1 text-sm text-black-500 dark:text-black-300" id="user_avatar_help">A profile picture is useful to confirm you are logged into your account</div>
    </form>
  );
}

export default UploadFile;
