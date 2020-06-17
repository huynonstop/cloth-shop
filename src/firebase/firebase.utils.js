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
