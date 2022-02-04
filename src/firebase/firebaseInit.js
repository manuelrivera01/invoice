// Import the functions you need from the SDKs you need
//import * as firebase from "firebase/app";
import "firebase/compat/firestore";
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
//import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaO3sDeFzHcvBTsv-rOHCUVUJCtY6X66w",
  authDomain: "invoicedb-85c97.firebaseapp.com",
  projectId: "invoicedb-85c97",
  storageBucket: "invoicedb-85c97.appspot.com",
  messagingSenderId: "688428544384",
  appId: "1:688428544384:web:74a2e53494150b3c3a5165"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
