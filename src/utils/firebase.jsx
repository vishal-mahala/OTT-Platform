// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9xN0-Q25uTwP_GloCGrg_hDed6JVS7MA",
  authDomain: "netflix-clone-1f62b.firebaseapp.com",
  projectId: "netflix-clone-1f62b",
  storageBucket: "netflix-clone-1f62b.firebasestorage.app",
  messagingSenderId: "716789059546",
  appId: "1:716789059546:web:3b393113b9615d47ab3ae3",
  measurementId: "G-77F0GK4CMY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
