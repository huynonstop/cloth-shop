import { firestore } from "./firebase.utils";
export const createUserProfile = async (user, ...moreData) => {
	if (!user) return;

	try {
		const { uid, displayName, email } = user;
		const userRef = firestore.doc(`users/${uid}`);
		const snapShot = await userRef.get();
		if (!snapShot.exists) {
			await userRef.set({
				displayName,
				email,
				createAt: new Date(),
				...moreData,
			});
		}
		return userRef;
	} catch (e) {
		throw new Error(e);
	}
};
