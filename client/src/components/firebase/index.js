



import React, { useState } from 'react';
// import { storage } from "./firebase";
const keys = require('../../../../server/config.js');
const firebaseConfig = keys.firebaseConfig;


import firebase from 'firebase/compat/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import 'firebase/analytics'






const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);


export { storage, firebase as default };