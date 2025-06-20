// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjqDL-W5WLrwnW2m-NkeA3aJY6Ljkw_e4",
  authDomain: "netflixgpt-12b0b.firebaseapp.com",
  projectId: "netflixgpt-12b0b",
  storageBucket: "netflixgpt-12b0b.firebasestorage.app",
  messagingSenderId: "33012311254",
  appId: "1:33012311254:web:a8122f0b9ed33a66e01577",
  measurementId: "G-8G0LTL4KB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();