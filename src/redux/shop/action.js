import { UPDATE_SHOP } from "../types";
export const updateShop = (collections) => ({
	type: UPDATE_SHOP,
	payload: collections,
});
