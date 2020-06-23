import {
	UPDATE_SHOP,
	FETCH_SHOP_START,
	FETCH_SHOP_FAILURE,
	FETCH_SHOP_SUCCESS,
} from "../types";
const INITIAL_STATE = {
	fetching: null,
	error: null,
	collections: null,
};
const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case FETCH_SHOP_START:
			return {
				...state,
				fetching: true,
				error: null,
			};
		case FETCH_SHOP_SUCCESS:
			return {
				...state,
				fetching: false,
			};
		case FETCH_SHOP_FAILURE:
			return {
				...state,
				fetching: false,
				error: payload,
			};
		case UPDATE_SHOP:
			return {
				...state,
				collections: payload,
			};
		default:
			return state;
	}
};
export default shopReducer;
