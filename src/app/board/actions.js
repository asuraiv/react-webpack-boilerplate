import {requestGet} from "../util/FetchUtils";
import {
	LOADING_MSG,
	LOADING_COMPLETE_MSG
} from "./constants";

// define action types
export const LOAD_ITEMS = "board/LOAD_ITEMS";
export const CHANGE_LOADING = "board/CHANGE_LOADING";

function sleep (delay) {
	let start = new Date().getTime();
	while (new Date().getTime() < start + delay);
}

// action using thunk
const loadItems = (items) => {

	return (dispatch, getState) => {

		const {loading} = getState().board;

		if (!loading) {
			dispatch({type: CHANGE_LOADING, payload: {loading: true}});
		}

		sleep(3000);

		Promise.resolve(dispatch({type: LOAD_ITEMS, payload: {items}}))
			.then(() =>
				dispatch({type: CHANGE_LOADING, payload: {status: LOADING_COMPLETE_MSG}})
			);
	};
};

export const boardAction = (dispatch) => ({

	loadItems() {

		Promise.resolve(requestGet("http://localhost:9001/dummy.json"))
			.then(jsonObj => {
				const {items} = jsonObj;
				dispatch(loadItems(items));
			});
	}
});