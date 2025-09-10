// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZOX-mVPfX1cq4sQc-hTuOd6mw3LJbaGo",
  authDomain: "tecno-shop-coder.firebaseapp.com",
  projectId: "tecno-shop-coder",
  storageBucket: "tecno-shop-coder.firebasestorage.app",
  messagingSenderId: "962566984624",
  appId: "1:962566984624:web:5fc7ec9620869aabbcbc75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializacion con metodo getFirestore
export const db = getFirestore(app)