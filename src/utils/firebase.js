import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

// initialize firebase authentication
const auth = getAuth(app);

// initialize firebase firestore for database uses
const db = getFirestore(app);

// initialize firebase storage for file uploads
const storage = getStorage(app);

// firestore collection reference
const userCollectionRef = collection(db, "users");

export { auth, db, storage, userCollectionRef };
