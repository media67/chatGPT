import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw7pfpEP9JPFmrySrD3tLc9dikROJ15XE",
  authDomain: "next-chatgpt-9f5e9.firebaseapp.com",
  projectId: "next-chatgpt-9f5e9",
  storageBucket: "next-chatgpt-9f5e9.appspot.com",
  messagingSenderId: "1005731774369",
  appId: "1:1005731774369:web:1606693db2a64982f455e0"
};

// Initialize Firebase
// This is fine for a React app, but we need a NextJs approach...
// const app = initializeApp(firebaseConfig);
// ...For NextJs, implement a Singleton pattern to initialize the firebase app only once.
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }