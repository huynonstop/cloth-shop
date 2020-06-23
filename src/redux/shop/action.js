import {
	UPDATE_SHOP,
	FETCH_SHOP_START,
	FETCH_SHOP_FAILURE,
	FETCH_SHOP_SUCCESS,
} from "../types";
import {
	firestore,
	transformCollectionsSnapshot,
} from "../../firebase/firebase.utils";
export const updateShop = (collections) => ({
	type: UPDATE_SHOP,
	payload: collections,
});

export const fetchStart = () => ({
	type: FETCH_SHOP_START,
});
export const fetchSuccess = () => ({
	type: FETCH_SHOP_SUCCESS,
});
export const fetchFail = (error) => ({
	type: FETCH_SHOP_FAILURE,
	payload: error,
});

export const fetchShop = () => (dispatch) => {
	dispatch(fetchStart());
	const collectionRef = firestore.collection("collections");
	collectionRef
		.get()
		.then((snapshot) => {
			const collectionData = transformCollectionsSnapshot(snapshot);
			dispatch(updateShop(collectionData));
			dispatch(fetchSuccess());
		})
		.catch((error) => dispatch(fetchFail(error)));
};
