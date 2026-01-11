import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPfmVTM6Oykio39AQJ4n8-NYZTHOyEqwA",
  authDomain: "bcsim-ea928.firebaseapp.com",
  projectId: "bcsim-ea928",
  storageBucket: "bcsim-ea928.firebasestorage.app",
  messagingSenderId: "445720155934",
  appId: "1:445720155934:web:355d16a6d6275033059b0f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
