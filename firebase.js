import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, initializeFirestore, deleteDoc } from 'firebase/firestore'; // ← CAMBIO AQUÍ

const firebaseConfig = {
  apiKey: "AIzaSyB5xVtW7yceha407P-onxLFUxWhRdcLU2k",
  authDomain: "expreocalfood.firebaseapp.com",
  projectId: "expreocalfood",
  storageBucket: "expreocalfood.firebasestorage.app",
  messagingSenderId: "215633931130",
  appId: "1:215633931130:web:fcb25f4ad014e5aa0204c3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app)

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, db, deleteDoc };
