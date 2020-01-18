import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const logger = store => next => action => {
	console.log("Current action:", action.type);
	let result = next(action);
	console.log("Next state", store.getState());
	return result;
};

export default (reducers, preloadedState) => {

	const middlewares = [
		logger,
		thunkMiddleware
	];

	const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

	return createStoreWithMiddleware(reducers, preloadedState);
}