import React, {Component} from "react";

class BoardTable extends Component {

	constructor(props) {
		super(props);
	}

	renderRows() {

		const rows = [
			{
				id: 1,
				title: '안녕하세요',
				writer: '홍길동',
			},
			{
				id: 2,
				title: '게시판 입니다.',
				writer: '김철수',
			},
			{
				id: 3,
				title: 'MaterialUI 공부중..',
				writer: '이공부',
			}
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
		);
	}
}

export default BoardTable;