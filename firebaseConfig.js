import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc, orderBy, serverTimestamp, getDocs, onSnapshot, deleteDoc, query, where, updateDoc, arrayRemove, arrayUnion } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpRVjnIfhIYHm_ReWNphXKHhQPgOqPzFo",
  authDomain: "personal-blogging-app-12e52.firebaseapp.com",
  databaseURL:"https://personal-blogging-app-12e52-default-rtdb.firebaseio.com",
  projectId: "personal-blogging-app-12e52",
  storageBucket: "personal-blogging-app-12e52.appspot.com",
  messagingSenderId: "720260294718",
  appId: "1:720260294718:web:5157478aabb744b11d496f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app); // Add this line to initialize Firebase Realtime Database

export {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  signOut,
  doc,
  onSnapshot,
  onAuthStateChanged,
  deleteDoc,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  query,
  orderBy,
  serverTimestamp,
  auth,
  db,
  where,
  updateDoc,
  arrayRemove,
  arrayUnion,
  database // Export the database object for Realtime Database
};
