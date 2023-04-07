import firebase, { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAZ1jF5VIn9zCeo4qFZw62oiJ4jkY-z_9g',
  authDomain: 'linkedin-clone-7d497.firebaseapp.com',
  projectId: 'linkedin-clone-7d497',
  storageBucket: 'linkedin-clone-7d497.appspot.com',
  messagingSenderId: '672392341335',
  appId: '1:672392341335:web:7eb95cb60759d27f658012',
};

const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
