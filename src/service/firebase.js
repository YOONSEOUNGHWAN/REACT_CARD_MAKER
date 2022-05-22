// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: "cardmaker-193af.appspot.com",
//   messagingSenderId: "824742744134",
//   appId: "1:824742744134:web:5b77a3deaf1228c75d3a47",
//   measurementId: "G-P1PE6R0M1N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

