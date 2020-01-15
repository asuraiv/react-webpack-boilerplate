import {combineReducers} from "redux";

import {
	READ
} from "./actions";

// 앱 상태
const app = {
	board: {
		items: []
	}
};

// reducer 정의
function reducer(state = app.board, action = {}) {

	switch (action.type) {
		case READ:
			const {payload} = action;
			return {
				...state,
				...payload
			};
		default:
			// Do nothing
			return state;
	}
}

export default combineReducers({
	board: reducer
});