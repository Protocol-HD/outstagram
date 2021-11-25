import React, { useRef } from 'react';

function CommentWrite({ postId, setCommentAdd }) {
	const refComment = useRef(null);
	const refName = useRef(null);

	const handelSubmit = (event) => {
		event.preventDefault();

		if (refName.current.value !== "" && refComment.current.value !== "") {
			const date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]
			const time = new Date().toTimeString().split(" ")[0];

			fetch("http://localhost:3005/comments", {
				method: "POST",
				headers: { "content-Type": "application/json" },
				body: JSON.stringify({
					author: refName.current.value,
					text: refComment.current.value,
					updated: date + ' ' + time,
					postId: postId

				})
			})
				.then(
					res => {
						if (res.ok) {
							alert("등록에 성공했습니다.")
							refName.current.value = "";
							refComment.current.value = "";
							setCommentAdd(true);
						}
					}
				);
		}
	}
	return (
		<form onSubmit={handelSubmit}>
			<div className="input-group mt-2">
				<input type="text" placeholder="아이디" aria-label="First name" className="form-control col-2" ref={refName} />
				<input type="text" placeholder="댓글" aria-label="Last name" className="form-control col-10" ref={refComment} />
				<button type="submit" className="input-group-text pointer btn-primary">댓글 달기</button>
			</div>
		</form>
	);
}

export default CommentWrite;