import React from 'react'
import { app } from '@/firebaseConfig';
import { getStorage, ref, uploadBytes } from "firebase/storage";

const uploadFile = (file, fileName) => {
  const storage = getStorage(app);
  const imagePostRef = ref(storage, "media/" + fileName);
  const fileType = file.type;
  console.log("The image is in the format of ", fileType);
  const metadata = {
    contentType: fileType,
  };
  console.log(fileName);

  uploadBytes(imagePostRef, file,metadata).then((snapshot) => {
    console.log('Uploaded to the images folder reference:', snapshot);
  }).catch((error) => {
    console.error('Error uploading to the images folder reference:', error);
  });
};

export default uploadFile;
