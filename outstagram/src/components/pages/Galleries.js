import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageTitle from '../PageTitle';
import Gallery from '../ui/Gallery';

function Galleries() {
	const url = `http://localhost:3005/post`;
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get(url).then(Response => setPosts(Response.data));
	}, [url]);
	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title="Galleries" />
			<div className="container-fluid d-inline-flex" id="photoBoxContainer">
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