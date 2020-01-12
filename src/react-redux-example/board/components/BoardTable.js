import React, {Component} from "react";

class BoardTable extends Component {

	constructor(props) {
		super(props);
	}

	renderRows() {

		const rows = [
		];
		return rows.map(post =>
			<tr key={`rows_${post.id}`}>
				<td>{post.id}</td>
				<td>{post.title}</td>
				<td>{post.writer}</td>
			</tr>
		);
	}

	render() {
		return (
			<div>
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