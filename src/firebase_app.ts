import {initializeApp} from  'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider}  from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCjcK0d8RpnxYGrbfxsLUpcfogdvr2WgXs",
    authDomain: "website-clone-51532.firebaseapp.com",
    projectId: "website-clone-51532",
    storageBucket: "website-clone-51532.appspot.com",
    messagingSenderId: "399945807399",
    appId: "1:399945807399:web:929ae53c279158f0ee0002",
    measurementId: "G-YVKR19C8M4"
  };

  const app = initializeApp(firebaseConfig);


  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();