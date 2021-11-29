import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageTitle from '../PageTitle';
import Gallery from '../widgets/Gallery';

function Galleries() {
	const url = `http://localhost:5001/post`;
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get(url).then(Response => setPosts(Response.data));
	}, [url]);
	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title="Galleries" />
			<div className="container">
				<div className="row">
					{posts.map(post => (
						<Gallery key={post.id} postId={post.id} titleImage={post.titleImage} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Galleries;