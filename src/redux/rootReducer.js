import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";
import shopReducer from "./shop/reducer";
export default combineReducers({
	user: userReducer,
	cart: cartReducer,
	shop: shopReducer,
});
