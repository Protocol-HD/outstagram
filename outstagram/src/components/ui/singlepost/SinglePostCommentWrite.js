import axios from 'axios';
import React, { useRef } from 'react';

function SinglePostCommentWrite({ id, refreashComments }) {
	const url = `http://localhost:5002/comments`;
	const commentText = useRef();

	const addComment = (e) => {
		e.preventDefault();
		const date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]
		const time = new Date().toTimeString().split(" ")[0];
		axios.post(url, {
			author: "admin",
			postId: id,
			text: commentText.current.value,
			updated: date + ' ' + time
		}).then(refreashComments());
	}

	return (
		<div id="eskimo_comment_form" className="eskimo_comment_form text-center">
			<h3>Leave a Reply</h3>
			<form onSubmit={addComment} method="post" id="commentform">
				<p><textarea id="comment" name="comment" cols="45" rows="8" required="required" ref={commentText}></textarea></p>
				<input name="submit" type="submit" id="submit" className="btn btn-default" value="Post Comment" />
			</form>
		</div>
	);
}

export default SinglePostCommentWrite;