import React, { useEffect, useState } from 'react';
import Gallery from '../ui/Gallery';

function Galleries() {
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
		<div id="eskimo-site-wrapper">
			<div className="container">
				<div className="row" id="photoBox">
					{posts.map(item => (
						<Gallery key={item.id} Url={item.titleImage} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Galleries;