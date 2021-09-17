
import firebase from 'firebase/compat/app';
import { getStorage, ref } from "firebase/storage";

import 'firebase/analytics'




const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export { storage, firebase as default };