import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: "disney-plus-a76a6.firebaseapp.com",
    projectId: "disney-plus-a76a6",
    storageBucket: "disney-plus-a76a6.appspot.com",
    messagingSenderId: "121086130417",
    appId: "1:121086130417:web:3046234c46ae5520e11150",
    measurementId: "G-VVMDQ5RTC2"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider =new GoogleAuthProvider();

export {auth,provider}
  