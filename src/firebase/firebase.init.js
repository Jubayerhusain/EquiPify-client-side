import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  // apiKey: "AIzaSyDvhUNgpG0c_NjvGyGt7tcdj2hiGNjrTgw",
  // authDomain: "equipify-603ef.firebaseapp.com",
  // projectId: "equipify-603ef",
  // storageBucket: "equipify-603ef.firebasestorage.app",
  // messagingSenderId: "952794093188",
  // appId: "1:952794093188:web:075c3ee8e8c2dc1101d4d1"
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
