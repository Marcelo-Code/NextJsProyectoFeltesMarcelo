// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzMiBx8-D4rRgbnOGFTwmaJkhSI1fhQAw",
  authDomain: "nextjsproyecto.firebaseapp.com",
  projectId: "nextjsproyecto",
  storageBucket: "nextjsproyecto.firebasestorage.app",
  messagingSenderId: "894543644640",
  appId: "1:894543644640:web:547d9f4f11b791b4d78d85",
  measurementId: "G-WD646FHZ7M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
