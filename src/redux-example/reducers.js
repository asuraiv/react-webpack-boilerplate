import {combineReducers} from 'redux';

import {
	ADD_TODO, 
	COMPLETE_TODO, 
	SET_VISIBILITY_FILTER, 
	VisibilityFilters
} from './actions';

const { SHOW_ALL } = VisibilityFilters;


function todos(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return Object.assign([], state, [
				...state, {
					text: action.text,
					completed: false
				}
			]);
		case COMPLETE_TODO:
			return Object.assign([], state, [
				...state.slice(0, action.index),
				Object.assign({}, state[action.index], {
					completed: true
				}),
				...state.slice(action.index + 1)
			]);
		default:
			return state;
	}
}

function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

// 리듀서 쪼개기
// function todoApp(state = {}, action) {
// 	return {
// 		visibilityFilter: visibilityFilter(state.visibilityFilter, action),
// 		todos: todos(state.todos, action)
// 	};
// }

const todoApp = combineReducers({
	visibilityFilter,
	todos
});

export default todoApp;

