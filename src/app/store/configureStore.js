import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

export default (reducers, preloadedState) => {

	const middlewares = [
		thunkMiddleware,
		createLogger
	];

	const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

	return createStoreWithMiddleware(reducers, preloadedState);
}