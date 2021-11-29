import axios from 'axios';
import React, { useRef } from 'react';

function CommentWrite({ postId, setRefreash }) {
	const url = "http://localhost:5002/comments";
	const refComment = useRef(null);
	const refName = useRef(null);

	const handelSubmit = (e) => {
		e.preventDefault();
		const date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]
		const time = new Date().toTimeString().split(" ")[0];
		axios.post(url, {
			author: refName.current.value,
			text: refComment.current.value,
			updated: date + ' ' + time,
			postId: postId
		}).then(() => {
			refName.current.value = "";
			refComment.current.value = "";
			setRefreash(true);
		});
	}
	return (
		<form onSubmit={handelSubmit}>
			<div className="input-group mt-2">
				<input type="text" placeholder="아이디" className="form-control col-2" ref={refName} required />
				<input type="text" placeholder="댓글" className="form-control col-10" ref={refComment} required />
				<button type="submit" className="input-group-text pointer btn-primary">댓글 달기</button>
			</div>
		</form>
	);
}

export default CommentWrite;