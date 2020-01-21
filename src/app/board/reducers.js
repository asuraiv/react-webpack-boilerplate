import {combineReducers} from "redux";

import {
	LOAD_ITEMS,
	CHANGE_LOADING
} from "./actions";

// app state
const app = {
	board: {
		loading: false,
		items: []
	}
};

// define reducer
function reducer(state = app.board, action = {}) {

	switch (action.type) {
		case LOAD_ITEMS:
			const {items} = action.payload;
			return Object.assign({}, state, {
				items: items
			});
		case CHANGE_LOADING:
			const {loading} = action.payload;
			return Object.assign({}, state, {
				loading: loading
			});
		default:
			// Do nothing
			return state;
	}
}

export default combineReducers({
	board: reducer
});