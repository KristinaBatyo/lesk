


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6XF7edTZW_rBkmDQ1gkJ-mU2ti6Tyf9U",
  authDomain: "reviews-dc14c.firebaseapp.com",
  projectId: "reviews-dc14c",
  storageBucket: "reviews-dc14c.appspot.com",
  messagingSenderId: "94081057881",
  appId: "1:94081057881:web:1c30e6f34b4314a1fedd48",
  measurementId: "G-LW9PCERTX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

