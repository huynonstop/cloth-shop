import { UPDATE_SHOP } from "../types";
const INITIAL_STATE = {
	loading: false,
	error: false,
	collections: null,
};
const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
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
