import "assets/scss/board.scss";
import "assets/dummy.json";

import React, {Component} from "react";
import ReactDOM from "react-dom";
import {connect, Provider} from "react-redux";

import configureStore from "../store/configureStore";
import reducers from "./reducers";
import {boardAction} from "./actions";
import BoardTable from "./components/BoardTable";

class BoardApp extends Component {
	render() {
		return (
			<BoardTable {...this.props}	/>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	boardAction: boardAction(dispatch)
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