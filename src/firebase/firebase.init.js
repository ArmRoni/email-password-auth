// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoh1Z7eMR5DNbOLIEcAEpoJFsgKLhm7mk",
  authDomain: "email-password-auth-82ffe.firebaseapp.com",
  projectId: "email-password-auth-82ffe",
  storageBucket: "email-password-auth-82ffe.firebasestorage.app",
  messagingSenderId: "679477007803",
  appId: "1:679477007803:web:de74aa530100ba54e1609e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
