import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth   , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "firebase/auth";
import {getFirestore, collection, addDoc ,doc ,setDoc , getDoc , getDocs ,deleteDoc} from "firebase/firestore";
import { getStorage, ref, uploadBytes ,getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDPrTxGNNz87iMnrB93hGbYRkSJO7lOE5Q",
  authDomain: "react-js-9d183.firebaseapp.com",
  databaseURL: "https://react-js-9d183-default-rtdb.firebaseio.com",
  projectId: "react-js-9d183",
  storageBucket: "react-js-9d183.appspot.com",
  messagingSenderId: "588822649173",
  appId: "1:588822649173:web:f31aface29b51808f5f7dc",
  measurementId: "G-JRG7MB000F"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  addDoc,
  db,
  doc,
  setDoc,
  getDoc,
  getDocs,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteDoc
}