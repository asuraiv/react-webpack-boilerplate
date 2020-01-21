import React, {Component} from "react";
import {css} from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

class BoardTable extends Component {

	constructor(props) {
		super(props);
		this.action = props.boardAction;
	}

	loadItems() {
		this.action.loadItems();
	}

	renderRows() {
		const {items} = this.props.board;
		return items.map(post =>
			<tr key={`rows_${post.id}`}>
				<td>{post.id}</td>
				<td>{post.title}</td>
				<td>{post.writer}</td>
			</tr>
		);
	}

	render() {
		const {loading} = this.props.board;
		return (
			<div>
				<span>
					<button onClick={this.loadItems.bind(this)}>load</button>
					<span>{status}</span>
				</span>
				<div className="simple-table">
					{loading ?
						<div>
							<ClipLoader
								css={css`margin-top: 5px;`}
								size={20}
								color={"#000000"}
							/>
						</div>
						:
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
					}
				</div>
			</div>
		);
	}
}

export default BoardTable;