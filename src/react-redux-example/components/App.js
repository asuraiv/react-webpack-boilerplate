import React, {Component} from "react";
import ReactDOM from "react-dom";
import {connect, Provider} from "react-redux";
import Layout from "./layout/Layout";
import configureStore from "../store/configureStore";
import boardReducers from "../reducer/boardReducers";

class App extends Component {

	render() {
		return (
			<Layout/>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {};
};

const ConnectedApp = connect(
	state => state,
	mapDispatchToProps
)(App);

ReactDOM.render(
	<Provider store={configureStore(boardReducers)}>
		<ConnectedApp />
	</Provider>
	,
	document.querySelector("#root")
);