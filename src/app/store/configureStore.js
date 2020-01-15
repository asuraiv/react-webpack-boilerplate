import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'

export default (reducers, preloadedState) => {

	const middlewares = [
		thunkMiddleware,
		logger
	];

	const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

	return createStoreWithMiddleware(reducers, preloadedState);
}