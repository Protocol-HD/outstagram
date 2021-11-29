import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Comments({ postId, refreash, setRefreash }) {
	const url = `http://localhost:5002/comments`;
	const [comment, setComment] = useState([]);
	const [amount, setAmount] = useState(3);

	const delComment = (id) => {
		axios.delete(url + `/${id}`).then(setRefreash(true));
	}

	useEffect(() => {
		axios.get(url + `?postId=${postId}`).then(Response => setComment(Response.data)).then(setRefreash(false));
	}, [url, postId, refreash, setRefreash])

	if (comment.length < 1) {
		return null;
	}
	return (
		<div>
			<table className="table table-hover table-sm table-borderless">
				<thead>
					<tr>
						<th scope="col-2">아이디</th>
						<th scope="col-8">댓글</th>
						<th scope="col-2">작성시간</th>
					</tr>
				</thead>
				<tbody>
					{
						comment.map(item => (
							<tr key={item.id}>
								<td className="col-2">{item.author}</td>
								<td className="col-8">{item.text}</td>
								<td className="col-2">{item.updated}</td>
								<td className="pointer" onClick={() => delComment(item.id)}>X</td>
							</tr>
						)).slice(0, amount)
					}
				</tbody>
			</table>
			<div className="d-flex justify-content-between">
				<button
					type="button"
					className={comment.length > amount ? "btn btn-primary mt-3" : "btn btn-secondary mt-3"}
					onClick={() => setAmount(amount + 3)}
				>
					{comment.length > amount ? "댓글 더 보기" : "댓글 끝"}
				</button>
				<button
					type="button"
					className={comment.length > 3 && amount > 3 ? "btn btn-outline-primary mt-3 d-inline" : "d-none"}
					onClick={() => setAmount(3)}
				>
					댓글 접기
				</button>
			</div>
		</div >
	);
}

export default Comments;