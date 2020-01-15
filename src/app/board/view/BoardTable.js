import React, {Component} from "react";

class BoardTable extends Component {

	constructor(props) {
		super(props);
	}

	getItems() {
		const {onLoadItemsClick} = this.props;
		// TODO Changing code using fetch or axios is needed
		const items = [
			{
				"id": 1,
				"title": "첫번째 글",
				"writer": "홍길동"
			},
			{
				"id": 2,
				"title": "두번째 글",
				"writer": "김철수"
			},
			{
				"id": 3,
				"title": "세번째 글",
				"writer": "이영희"
			},
			{
				"id": 4,
				"title": "네번째 글",
				"writer": "김미자"
			}
		];
		onLoadItemsClick(items);
	}

	renderRows() {
		const {items = []} = this.props.board;
		return items.map(post =>
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
				<button onClick={this.getItems.bind(this)}>load</button>
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