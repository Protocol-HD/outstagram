import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SliderItem({ postId }) {
	const url = `http://localhost:5001/post/${postId}`;
	const [post, setPost] = useState([]);

	useEffect(() => {
		axios.get(url).then(Response => setPost(Response.data));
	}, [url]);

	return (
		<div>
			<div className="eskimo-slider-img"></div>
			<ul className="eskimo-slider-image-meta eskimo-image-meta-post">
				{
					post.categoryId && post.categoryId.map(item => (
						<li key={item.id}><span className="badge badge-default">{item.name}</span></li>
					))
				}
			</ul>
			<div className="clearfix"></div>
			<img src={`./images/${post.titleImage}`} alt={post.postTitle} />
			<div className="eskimo-slider-desc">
				<div className="eskimo-slider-desc-inner">
					<h2 className="card-title">{post.postTitle}</h2>
					<p className="card-text">{post.text}</p>
				</div>
			</div>
		</div>

	);
}

export default SliderItem;