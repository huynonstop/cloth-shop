import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
const middleWares = [];
const logger = (store) => (next) => (action) => {
	console.log("Dispatching: ", action);
	console.log("Prev State: ", store.getState());
	let result = next(action);
	console.log("Next State: ", store.getState());
	console.log("Result", result);
	return result;
};

if (process.env.NODE_ENV === "development") {
	middleWares.push(logger);
}
const store = createStore(
	rootReducer,
	applyMiddleware(...middleWares)
);
export default store;
