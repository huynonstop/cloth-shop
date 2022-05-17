<<<<<<< HEAD
import { firestore } from "./firebase.utils";
export const createUserRef = async (user, moreData) => {
	if (!user) return;

	try {
		const { uid, displayName, email } = user;
		const userRef = firestore.doc(`users/${uid}`);
		const snapShot = await userRef.get();
		if (!snapShot.exists) {
			const profile = {
				email,
				createAt: new Date(),
				displayName: displayName,
				...moreData,
			};
			await userRef.set(profile);
		}
		return userRef;
	} catch (e) {
		throw new Error(e);
	}
};
=======
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
>>>>>>> 703bc6541caa54d1e326b293fe0e807a3063d0ae
