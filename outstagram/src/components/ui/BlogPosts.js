import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import Post from '../Post';

function BlogPosts() {
	const url = `http://localhost:5001/post`;
	const [posts, setPosts] = useState([]);
	const getPost = useCallback(() => {
		axios.get(url).then(Response => setPosts(Response.data.reverse()))
	}, [url]);

	useEffect(() => {
		getPost();
	}, [getPost]);

	const refreash = () => {
		getPost();
	}

	return (
		<>
			{
				posts.map(post => (
					<Post key={post.id} post={post} refreash={refreash} />
				))
			}
		</>
	);
}

export default BlogPosts;