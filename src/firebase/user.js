import {
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
import { fs, auth } from '.';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const createUserIfNotExists = async (userAuth, additionalInformation = {}) => {
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
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};