import React, { useEffect, useState } from 'react';
import Post from './Post';

function BlogPosts() {
	const [posts, setPosts] = useState([]);


	useEffect(() => {
		fetch(`http://localhost:3005/post`)
			.then(res => {
				return (
					res.json()
				);
			})
			.then(data => {
				setPosts(data);
			})
	}, []);
	return (
		<>
			{
				posts.map(post => (
					<Post key={post.id} post={post} />
				))
			}
		</>
	);
}

export default BlogPosts;