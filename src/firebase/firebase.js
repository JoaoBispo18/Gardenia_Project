import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCDJ21-vJYUd3jd8US5G3KZ-QHzaloxbqg",
  authDomain: "gardeniadb-f89ee.firebaseapp.com",
  projectId: "gardeniadb-f89ee",
  storageBucket: "gardeniadb-f89ee.firebasestorage.app",
  messagingSenderId: "160819179340",
  appId: "1:160819179340:web:68ef2727b0d33402f229e9",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };