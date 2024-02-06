import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDnMBC9Gl3fsjxFsbRoFdhbc4f3jkCt_4o",
  authDomain: "cvl-capital.firebaseapp.com",
  projectId: "cvl-capital",
  storageBucket: "cvl-capital.appspot.com",
  messagingSenderId: "637178328921",
  appId: "1:637178328921:web:4de2d662204869d600be48",
  measurementId: "G-8VWVQ7N9L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Fix the import statement for getAuth
const provider = new GoogleAuthProvider();
const db = getFirestore(app); // Initialize Firestore

export { auth, provider, db };