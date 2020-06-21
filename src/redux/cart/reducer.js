import {
	TOGGLE_CART_DROPDOWN,
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_IN_CART,
	CLEAR_ITEM_IN_CART,
} from "../types";
const INITIAL_STATE = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: {
			items: {},
			hidden: true,
			countItem: 0,
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
const deleteItem = (cart, id) => {
	const { [id]: newItem, ...restItem } = cart;
	return [restItem, { ...newItem }];
};
const removeOneItem = (cart, id) => {
	const [restItem, newItem] = deleteItem(cart, id);
	newItem.quantity = newItem.quantity - 1;
	if (newItem.quantity <= 0) return restItem;
	else
		return {
			...restItem,
			[id]: newItem,
		};
};
const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case TOGGLE_CART_DROPDOWN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case ADD_ITEM_TO_CART: {
			let items = addItem(state.items, payload);
			return {
				...state,
				items,
				countItem: state.countItem + 1,
			};
		}
		case REMOVE_ITEM_IN_CART: {
			let items = removeOneItem(state.items, payload);
			return {
				...state,
				items,
				countItem: state.countItem - 1,
			};
		}
		case CLEAR_ITEM_IN_CART: {
			let [items] = deleteItem(state.items, payload);
			return {
				...state,
				items,
				countItem: state.countItem - state.items[payload].quantity,
			};
		}
		default:
			return state;
	}
};
export default cartReducer;
