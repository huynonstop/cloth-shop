import firebase from "firebase/app";
import CONFIG from "./API_KEY";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp(CONFIG);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const addCollectionItems = (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	const batch = firestore.batch();
	Object.keys(objectsToAdd).forEach((key) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, { ...objectsToAdd[key] });
	});
	return batch.commit();
};
export const fetchSnapshot = (collections) => {
	const fetchedCollections = collections.docs.map((doc) => {
		return { ...doc.data(), id: doc.id };
	});
	return fetchedCollections.reduce((p, c) => {
		p[c.title.toLowerCase()] = c;
		return p;
	}, {});
};
