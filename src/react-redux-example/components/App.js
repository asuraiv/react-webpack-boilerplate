import React, {Component} from "react";
import ReactDOM from "react-dom";
// import Button from "@material-ui/core/Button";
import Layout from "./layout/Layout";

class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout/>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#root"));