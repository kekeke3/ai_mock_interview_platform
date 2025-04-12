// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcgNnhfv_NTDfvPgGh9Gh-81vor9pr0Bs",
  authDomain: "prepwise-169e8.firebaseapp.com",
  projectId: "prepwise-169e8",
  storageBucket: "prepwise-169e8.firebasestorage.app",
  messagingSenderId: "771189274885",
  appId: "1:771189274885:web:7c659bcccc57bf7fe05f6c",
  measurementId: "G-SEF036HKWQ"
};
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)