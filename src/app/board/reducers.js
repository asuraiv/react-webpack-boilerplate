import {combineReducers} from "redux";

import {
	LOAD_ITEMS,
	CHANGE_STATUS
} from "./actions";

// app state
const app = {
	board: {
		status: "",
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
		case CHANGE_STATUS:
			const {status} = action.payload;
			return Object.assign({}, state, {
				status: status
			});
		default:
			// Do nothing
			return state;
	}
}

export default combineReducers({
	board: reducer
});