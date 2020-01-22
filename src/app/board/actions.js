import {requestGet} from "../util/FetchUtils";
// define action types
export const LOAD_ITEMS = "board/LOAD_ITEMS";
export const CHANGE_LOADING = "board/CHANGE_LOADING";


function sleep (delay) {
	const start = new Date().getTime();
	while (new Date().getTime() < start + delay);
}

// create action using thunk
const loadItems = () => {

	return (dispatch, getState) => {

		const {loading} = getState().board;

		if (!loading) {
			dispatch({type: CHANGE_LOADING, payload: {loading: true}});
		}

		Promise.resolve(requestGet(/* Can change */"http://localhost:9001/dummy.json"))
			.then(jsonObj => {

				// for spinner test
				sleep(3000);

				dispatch({type: CHANGE_LOADING, payload: {loading: false}});

				const {items} = jsonObj;
				dispatch({type: LOAD_ITEMS, payload: {items}})
			});
	};
};

export const boardAction = (dispatch) => ({

	loadItems() {
		dispatch(loadItems())
	}
});