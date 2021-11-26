import { useCallback, useEffect, useState } from 'react';
import Comments from './Comments';
import CommentWrite from './CommentWrite';
import Content from './Content';
import axios from 'axios';

function Post({ post, refreash }) {
	const url = `http://localhost:5002/comments`;
	const [comment, setComment] = useState([]);
	const getComment = useCallback(() => {
		axios.get(url + `?postId=${post.id}`).then(Response => setComment(Response.data))
	}, [url, post.id]);

	const refrashComment = () => {
		getComment();
	}

	useEffect(() => {
		getComment()
	}, [getComment]);
	return (
		<div className="card card-horizontal">
			<div className="card-body">
				<div className="card-horizontal-left">
					<Content post={post} refreash={refreash} comment={comment} />
					<hr />
					<Comments comment={comment} refrashComment={refrashComment} />
					<CommentWrite postId={post.id} refrashComment={refrashComment} />
				</div>
			</div>
		</div>
	);
}

export default Post;