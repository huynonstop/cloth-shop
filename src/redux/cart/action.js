import { TOGGLE_CART_DROPDOWN, ADD_ITEM_TO_CART } from "../types";
export const toggleCartDropdown = (user) => ({
	type: TOGGLE_CART_DROPDOWN,
	payload: user,
});
export const addItemToCart = (item) => ({
	type: ADD_ITEM_TO_CART,
	payload: item,
});
