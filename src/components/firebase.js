// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYSgp7XVY7yV_B1j9pXjTzlHPWeWkUniA",
  authDomain: "fir-ef16a.firebaseapp.com",
  projectId: "fir-ef16a",
  storageBucket: "fir-ef16a.appspot.com",
  messagingSenderId: "315900423689",
  appId: "1:315900423689:web:2569566cb6f71656bb52d8",
  measurementId: "G-DGQMJ55D3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
