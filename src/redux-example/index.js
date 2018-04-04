import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);

import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';

// 초기 상태를 기록합니다.
console.log(store.getState());

// 상태가 바뀔때마다 기록합니다.
let unsubscribe = store.subscribe(() =>
	console.log(store.getState())
);

// 액션들을 보냅니다.
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// 상태 변경을 더 이상 받아보지 않습니다.
unsubscribe();