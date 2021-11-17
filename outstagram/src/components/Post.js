import React, { useEffect, useState } from 'react';

function Post({ post }) {
	const [categoryName, setCategoryName] = useState("");
	const [postImageUrl, setpostImageUrl] = useState("")


	const callCategoryName = (id) => {
		fetch(`http://localhost:3005/categories/${id}`)
			.then(res => {
				return res.json()
			})
			.then(data => {
				setCategoryName(data.name);
			})
	}

	useEffect(() => {
		callCategoryName(post.categoryId);
		setpostImageUrl(`./images/${post.titleImage}`);
	}, []);

	return (
		<div className="card card-horizontal">
			<div className="card-body">
				<div className="card-horizontal-left">
					<div className="card-category">
						<a href="category.html">{categoryName}</a>
					</div>
					<h3 className="card-title"><a href="single-post.html">{post.postTitle}</a></h3>
					<div className="card-excerpt">
						<img src={postImageUrl} />
						<p>{post.text.substr(0, 300)} ...</p>
					</div>
					<div className="card-horizontal-meta">
						<div className="eskimo-author-meta">
							By <a className="author-meta" href="author.html">{post.author}</a>
						</div>
						<div className="eskimo-date-meta">
							<a href="single-post.html">{post.created}</a>
						</div>
						<div className="eskimo-reading-meta">{post.updated}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;