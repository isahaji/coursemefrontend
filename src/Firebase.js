// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgvBTlVbS2BJImxMpvYJ5MEZhXaT4g4VM",
  authDomain: "courseme-ec87b.firebaseapp.com",
  projectId: "courseme-ec87b",
  storageBucket: "courseme-ec87b.appspot.com",
  messagingSenderId: "941730096664",
  appId: "1:941730096664:web:16bc3eec21c7424589456d",
  measurementId: "G-QBNLGXNV4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}