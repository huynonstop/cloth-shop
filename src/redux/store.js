import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
const middlewares = [];
const logger = (store) => (next) => (action) => {
	console.log("Dispatching: ", action);
	console.log("Prev State: ", store.getState());
	let result = next(action);
	console.log("Next State: ", store.getState());
	return result;
};
let store;
if (process.env.NODE_ENV === "development") {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	middlewares.push(logger);
	store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(...middlewares))
	);
} else {
	store = createStore(rootReducer, applyMiddleware(...middlewares));
}
store.subscribe(() => {
	localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});
export default store;
