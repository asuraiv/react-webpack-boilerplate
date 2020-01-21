import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

const logger = store => next => action => {
	console.log("action:", action.type);
	let result = next(action);
	console.log("next state", store.getState());
	return result;
};

export default (reducers, preloadedState) => {

	const middlewares = [
		thunk, logger
	];

	const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

	return createStoreWithMiddleware(reducers, preloadedState);
}