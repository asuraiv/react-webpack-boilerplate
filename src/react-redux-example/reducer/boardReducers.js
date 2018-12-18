import {combineReducers} from "redux";
import {
	CREATE,
	READ,
	UPDATE,
	DELETE
} from "../action/boardActionType"

// 앱 상태
const board = {
	list: [],
	post: {
		id: null,
		title: "",
		writer: "",
		date: null,
		content: ""
	},
	recentId: 0
};

function boardReducer(state = board, action ={}) {
	switch(action.type) {
		case CREATE:
			// do somthing
			return Object.assign({}, state);
		case READ:
			// do somthing
			return Object.assign({}, state);
		case UPDATE:
			// do somthing
			return Object.assign({}, state);
		case DELETE:
			// do somthing
			return Object.assign({}, state);
		default:
			return Object.assign({}, state);
	}
}

export default combineReducers({
	board: boardReducer
});