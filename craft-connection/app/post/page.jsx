"use client"
import React, { useState } from 'react';
import UploadFile from '../components/UploadFile';
import CreatePost from '../components/CreatePost';

const page = () => {

  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1em' }}>
    <CreatePost/>
    </div>
    </>
  );
};

export default page;
