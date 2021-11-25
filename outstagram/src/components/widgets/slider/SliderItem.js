import React, { useEffect, useState } from 'react';

function SliderItem({ postId }) {
	const [post, setPost] = useState([]);
	const [slideImageUrl, setSlideImageUrl] = useState("");

	useEffect(() => {
		fetch(`http://localhost:3005/post/${postId}`)
			.then(res => {
				return res.json()
			})
			.then(data => {
				setPost(data)
				setSlideImageUrl(`./images/${data.titleImage}`)
			});
	}, [postId]);

	return (
		<div>
			<div className="eskimo-slider-img"></div>
			<ul className="eskimo-slider-image-meta eskimo-image-meta-post">
				<li><span className="badge badge-default">{post.author}</span></li>
				{
					post.categoryId && post.categoryId.map(item => (
						<li key={item.id}><span className="badge badge-default">{item.name}</span></li>
					))
				}
			</ul>
			<div className="clearfix"></div>
			<img src={slideImageUrl} alt={post.postTitle} />
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