import { TOGGLE_CART_DROPDOWN, ADD_ITEM_TO_CART } from "../types";
const INITIAL_STATE = {
	items: {},
	hidden: true,
};
const addItem = (cart, item) => {
	const itemInCart = cart[item.id];
	const newItemInCart = itemInCart
		? {
				...itemInCart,
				quantity: itemInCart.quantity + 1,
		  }
		: {
				...item,
				quantity: 1,
		  };
	return {
		...cart,
		[item.id]: newItemInCart,
	};
};
const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case TOGGLE_CART_DROPDOWN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case ADD_ITEM_TO_CART:
			return {
				...state,
				items: addItem(state.items, payload),
			};
		default:
			return state;
	}
};
export default cartReducer;
