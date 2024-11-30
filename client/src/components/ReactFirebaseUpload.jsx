


import React, { useState } from 'react';
// import { storage } from "./firebase";
// const keys = require('../../../server/config.js');
const firebaseConfig = {

  apiKey: "AIzaSyB1TBwW7qKUvlPX56Lt7N913Fu8bFBHxAw",

  authDomain: "dndimages-a4807.firebaseapp.com",

  projectId: "dndimages-a4807",

  storageBucket: "dndimages-a4807.appspot.com",

  messagingSenderId: "484043042562",

  appId: "1:484043042562:web:8b3532a80d48ae014a1c1b",

  measurementId: "G-DQ8PPLZXZ0"

};



import firebase from 'firebase/compat/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import 'firebase/analytics'



const firebaseApp = firebase.initializeApp(firebaseConfig);


const ReactFirebaseUpload = () => {
  const [image, setImage] = useState(null);

  const handleChange = event => {

    console.log(event.target.files[0], 'what we want');
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }


  }

  const handleUpload = () => {
    const storage = getStorage(firebaseApp);

    // Create a reference to 'mountains.jpg'
    const storageRef = ref(storage, image.name);


    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log(snapshot);
      console.log('Uploaded a blob or file!');
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });


    });


  };

  return (
    <div>

      This is the handleUpload
      <br />

      <input type='file' onChange={handleChange} />

      <button onClick={handleUpload}>Upload</button>


    </div>
  );
};

export default ReactFirebaseUpload;
