import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
const logger = (store) => (next) => (action) => {
	let result = next(action);
	console.log("Dispatching", action);
	console.log("State", store.getState());
	console.log("Result", result);
	return result;
};
const middleWares = [logger];

const store = createStore(
	rootReducer,
	applyMiddleware(...middleWares)
);
export default store;
