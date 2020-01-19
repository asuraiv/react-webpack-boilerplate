import {
	LOADING_MSG,
	LOADING_COMPLETE_MSG
} from "./constants";

// define action types
export const LOAD_ITEMS = "board/LOAD_ITEMS";
export const CHANGE_STATUS = "board/CHANGE_STATUS";

// action using thunk
const loadItems = (items) => {

	return (dispatch, getState) => {

		const {status} = getState().board;

		if (status != LOADING_MSG) {
			dispatch({type: CHANGE_STATUS, payload: {status: LOADING_MSG}});
		}

		dispatch({type: LOAD_ITEMS, payload: {items}});

		setTimeout(
			() => {dispatch({type: CHANGE_STATUS, payload: {status: LOADING_COMPLETE_MSG}})}
			, 1000
		);
	};
};

export const boardAction = (dispatch) => ({

	loadItems() {

		fetch("http://localhost:9001/dummy.json")
			.then(response => {
				return response.json();
			})
			.then(jsonObj => {
				const {items} = jsonObj;
				dispatch(loadItems(items));
			})
			.catch(err => {
				console.log(err);
			});
	}
});