import React, {Component} from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Button variant="contained" color="primary">
				Hello Material!
			</Button>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#root"));