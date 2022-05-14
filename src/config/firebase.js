// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCobETVP2VCZzGaX0CeUm7x7UaSg9WTlDk",
  authDomain: "react-crud-df.firebaseapp.com",
  projectId: "react-crud-df",
  storageBucket: "react-crud-df.appspot.com",
  messagingSenderId: "908603827245",
  appId: "1:908603827245:web:8d06e1345dafe820a284a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;