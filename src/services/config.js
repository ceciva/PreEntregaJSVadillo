
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// "AIzaSyAJ2PrwYbR6mzETYE7D7vfYBmGjwqfaers"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "florencia-6d70d.firebaseapp.com",
  projectId: "florencia-6d70d",
  storageBucket: "florencia-6d70d.appspot.com",
  messagingSenderId: "1086264025026",
  appId: "1:1086264025026:web:cb601a770b905905dec05b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);