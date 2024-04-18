// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7yVxbw-qtCY4pgeqgVdl4lH7Vr7h1P5k",
  authDomain: "uts-1-328e2.firebaseapp.com",
  projectId: "uts-1-328e2",
  storageBucket: "uts-1-328e2.appspot.com",
  messagingSenderId: "988377286438",
  appId: "1:988377286438:web:48452c0b3945a4cfa363e7"
};

// Initialize Firebase

// Inisialisasi Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Dapatkan instance Firebase Firestore
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };