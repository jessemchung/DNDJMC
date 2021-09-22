



import React, { useState } from 'react';
// import { storage } from "./firebase";
const keys = require('../../../../server/config.js');
const firebaseConfig = keys.firebaseConfig;


import firebase from 'firebase/compat/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import 'firebase/analytics'



const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);


const handleUpload = (file) => {

  // Create a reference to 'mountains.jpg'
  const storageRef = ref(storage, file.name);

  const metadata = {
    contentType: 'image/jpeg',
  };



  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, file, metadata).then((snapshot) => {
    console.log(snapshot);
    console.log('Uploaded a blob or file!');
    getDownloadURL(snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });


  });


};







export { storage, handleUpload, firebase };