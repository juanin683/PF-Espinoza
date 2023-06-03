// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHiFeulWB004xZ19EXxBdKXEWZ_CC2zKE",
  authDomain: "dark-phone-tienda.firebaseapp.com",
  projectId: "dark-phone-tienda",
  storageBucket: "dark-phone-tienda.appspot.com",
  messagingSenderId: "263647035541",
  appId: "1:263647035541:web:9c1b85838881c8c3701b9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)