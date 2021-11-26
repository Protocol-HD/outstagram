import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PageTitle from '../PageTitle';
import SinglePostComments from '../ui/singlepost/SinglePostComments';
import SinglePostCommentWrite from '../ui/singlepost/SinglePostCommentWrite';
import SinglePostContents from '../ui/singlepost/SinglePostContents';

function SinglePost() {
	const params = useParams();
	const url = `http://localhost:5001/post/${params.id}`;
	const commentUrl = `http://localhost:5002/comments?postId=${params.id}`
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	useEffect(() => {
		axios.get(url).then(Response => setPost(Response.data));
		axios.get(commentUrl).then(Response => setComments(Response.data));
	}, [url, commentUrl]);

	const refreashComments = () => {
		axios.get(commentUrl).then(Response => setComments(Response.data));
	}

	return (
		<>
			<div id="eskimo-site-wrapper">
				<PageTitle title="Detail Post" />
				<main id="eskimo-main-container">
					<div className="container">
						<SinglePostContents post={post} />
						<SinglePostComments comments={comments} />
						<SinglePostCommentWrite refreashComments={refreashComments} id={params.id} />
					</div>
				</main>
			</div>
		</>
	);
}

export default SinglePost;