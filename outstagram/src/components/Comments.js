import React, { useEffect, useState } from 'react';

function Comments({ postId, commentAdd, setCommentAdd }) {
	const [comment, setComment] = useState([]);
	const [amount, setAmount] = useState(2);
	const [commentButton, setCommentButton] = useState(true);

	useEffect(() => {
		fetch(`http://localhost:3005/comments?postId=${postId}`)
			.then(res => {
				return (
					res.json()
				);
			})
			.then(data => {
				setComment(data);
				setCommentAdd(false);
			})
	}, [commentAdd]);

	const comLists = comment.map(item => (
		<tr key={item.id}>
			<td className="col-2">{item.author}</td>
			<td className="col-8">{item.text}</td>
			<td className="col-2">{item.updated}</td>
		</tr>
	)).slice(0, amount);

	const handleAmount = () => {
		setAmount(comment.length > amount ? amount + 2 : setCommentButton(false));
	}

	if (comment.length < 1) {
		return null;
	}
	return (
		<div>
			<table class="table table-hover table-sm table-borderless">
				<thead>
					<tr>
						<th scope="col-2">아이디</th>
						<th scope="col-8">댓글</th>
						<th scope="col-2">작성시간</th>
					</tr>
				</thead>
				<tbody>{comLists}</tbody>
			</table>
			<button type="button" className={commentButton ? "btn btn-primary mt-3" : "btn btn-secondary mt-3"} onClick={handleAmount}>{commentButton ? "댓글 더 보기" : "댓글 끝"}</button>
		</div>

	);
}

export default Comments;