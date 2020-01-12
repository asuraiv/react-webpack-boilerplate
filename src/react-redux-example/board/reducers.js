import {combineReducers} from "redux";

import {
	READ
} from "./actions";

// 앱 상태
const app = {
	current: '',
	board: {
		items: [],
		post: {
			id: null,
			title: "",
			writer: "",
			date: null,
			content: ""
		},
		recentId: 0
	}
};

// reducer 정의
function reducer(state = app.board, action = {}) {
	switch (action.type) {
		case READ:
			const {items} = action.payload;
			return Object.assign({
				board: {
					items: items
				}
			}, state);
		default:
			return Object.assign({}, state);
	}
}

export default combineReducers({
	board: reducer
});