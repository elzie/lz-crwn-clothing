import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA7NjA8gzTwUSvaB_1d6QvNUVjXBIvCf_I',
  authDomain: 'crwn-clothing-db-2221e.firebaseapp.com',
  projectId: 'crwn-clothing-db-2221e',
  storageBucket: 'crwn-clothing-db-2221e.appspot.com',
  messagingSenderId: '729436430707',
  appId: '1:729436430707:web:5737cf759a1460a65e6506',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// create user in database
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log('a', userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log('b', userSnapshot);

  if (!userSnapshot.exists()) {
    // if user data does not exist
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userDocRef;
};
