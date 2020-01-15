import "assets/scss/board.scss";
import "assets/dummy.json";

import React, {Component} from "react";
import ReactDOM from "react-dom";
import {connect, Provider} from "react-redux";

import configureStore from "../store/configureStore";
import reducers from "./reducers";
import {loadItems} from "./actions";
import BoardTable from "./view/BoardTable";

class BoardApp extends Component {
	render() {
		return (
			<BoardTable {...this.props}	/>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	onLoadItemsClick: items => {
		dispatch(loadItems(items));
	}
});

const ConnectedApp = connect(
	state => state,
	mapDispatchToProps
)(BoardApp);

ReactDOM.render(
	<Provider store={configureStore(reducers)}>
		<ConnectedApp />
	</Provider>
	,
	document.querySelector("#root")
);