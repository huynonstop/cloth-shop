import { initializeApp } from "firebase/app";
import CONFIG from "./CONFIG";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  signInWithRedirect
} from 'firebase/auth';

const app = initializeApp(CONFIG);

const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
provider.setCustomParameters({ prompt: "select_account" });
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signOutGoogle = () => signOut(auth);

export const fs = getFirestore(app);

export const createUser = (userAuth) => {
  const { uid } = userAuth;
  const userDocRef = doc(fs, 'users', uid);
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}