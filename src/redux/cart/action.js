import {
	TOGGLE_CART_DROPDOWN,
	ADD_ITEM_TO_CART,
	CLEAR_ITEM_IN_CART,
	REMOVE_ITEM_IN_CART,
} from "../types";
export const toggleCartDropdown = (user) => ({
	type: TOGGLE_CART_DROPDOWN,
	payload: user,
});
export const addItemToCart = (item) => ({
	type: ADD_ITEM_TO_CART,
	payload: item,
});
export const clearItem = (id) => ({
	type: CLEAR_ITEM_IN_CART,
	payload: id,
});
export const removeOneItem = (id) => ({
	type: REMOVE_ITEM_IN_CART,
	payload: id,
});
