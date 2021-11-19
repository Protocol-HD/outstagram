import React, { useEffect, useState } from 'react';

function Content({ post }) {
	const [categoryName, setCategoryName] = useState("");
	const [postImageUrl, setpostImageUrl] = useState("");
	const [like, setLike] = useState(post.like);
	const [more, setMore] = useState(false);


	const callCategoryName = (id) => {
		fetch(`http://localhost:3005/categories/${id}`)
			.then(res => {
				return res.json()
			})
			.then(data => {
				setCategoryName(data.name);
			})
	}

	const handleMore = () => {
		setMore(!more);
	}

	const viewMore = () => {
		return (
			<>
				<p>{more ? post.text : post.text.substr(0, 300) + "..."}</p>
				<button type="button" className={more ? "btn btn-secondary mt-3" : "btn btn-primary mt-3"} onClick={handleMore}>
					{more ? "접기" : "더 보기"}
				</button>
			</>
		);
	}

	const handleLike = () => {
		fetch(`http://localhost:3005/post/${post.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				...post,
				like: !like
			})
		})
			.then(res => {
				if (res.ok) setLike(!like);
			});
	}

	useEffect(() => {
		callCategoryName(post.categoryId);
		setpostImageUrl(`./images/${post.titleImage}`);
	}, []);

	return (
		<>
			<div className="card-category">
				<a href="category.html">{categoryName}</a>
			</div>
			<h3 className="card-title"><a href="single-post.html">{post.postTitle}</a></h3>
			<div className="card-excerpt">
				<img src={postImageUrl} />
				<div className="likeBox">
					<div className="like"><img src={like ? ("./images/like_true.svg") : ("./images/like.svg")} onClick={handleLike} /></div>
					<div className="likeText">{like ? ("좋아요!!") : ("")}</div>
				</div>
				<p>{post.text.length > 300 ? viewMore() : post.text}</p>
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
		</>
	);
}

export default Content;