import { initializeApp } from "firebase/app";
import CONFIG from "./CONFIG";
import { getFirestore } from 'firebase/firestore';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  signInWithRedirect,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

const app = initializeApp(CONFIG);

const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
provider.setCustomParameters({ prompt: "select_account" });
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signOutGoogle = () => signOut(auth);
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const fs = getFirestore(app);

export const authStateListener = (cb) => {
  return onAuthStateChanged(auth, cb)
}
