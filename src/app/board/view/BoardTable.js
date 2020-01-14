import React, {Component} from "react";
import axios from "axios";

class BoardTable extends Component {

	constructor(props) {
		super(props);
	}

	readItems() {
		const {readItems} = this.props;
		const config = {
			headers: {'Access-Control-Allow-Origin': '*'}
		};
		axios.get("http://localhost:9001/dummy.json", config)
			.then(response => {
				console.log(response);
				readItems(response);
			});
	}

	renderRows() {
		const {items = []} = this.props;
		return items.map(post =>
			<tr key={`rows_${post.id}`}>
				<td>{post.id}</td>
				<td>{post.title}</td>
				<td>{post.writer}</td>
			</tr>
		);
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<button onClick={this.readItems.bind(this)}>load</button>
				<div className="simple-table">
					<table cellSpacing="0">
						<colgroup>
							<col width="10%"/>
							<col width="*"/>
							<col width="15%"/>
						</colgroup>
						<thead>
						<tr>
							<th>번호</th>
							<th>제목</th>
							<th>글쓴이</th>
						</tr>
						</thead>
						<tbody>
						{this.renderRows()}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default BoardTable;