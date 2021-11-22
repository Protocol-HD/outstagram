import React, { useEffect, useState } from 'react';
import EditPost from '../EditPost';
import PageTitle from '../PageTitle';
import { useParams } from "react-router";

function EditPostPage() {
	let url = useParams();
	const [post, setPost] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3005/post/${url.id}`)
			.then(res => {
				return (
					res.json()
				);
			})
			.then(data => {
				setPost(data);
			})
	}, []);
	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title="Edit Post" />
			<div className="testBox">
				<EditPost key={post.id} post={post} urlId={url.id} />
			</div>
		</div>
	);
}

export default EditPostPage;