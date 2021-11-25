import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Content({ post }) {
	const [like, setLike] = useState(post.like);
	const [more, setMore] = useState(false);

	const handleMore = () => {
		setMore(!more);
	}

	const viewMore = () => {
		return (
			<>
				<div>{more ? post.text : post.text.substr(0, 300) + "..."}</div>
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

	return (
		<>
			<div className="card-category">
				{
					post.categoryId && post.categoryId.map(item => (
						<span key={item.id} className="cardCategory">{item.name}</span>
					))
				}
			</div>
			<h3 className="card-title">{post.postTitle}</h3>
			<div className="card-excerpt">
				<img src={`./images/${post.titleImage}`} alt="" />
				<div className="likeBox">
					<div className="like"><img src={like ? ("./images/like_true.svg") : ("./images/like.svg")} alt="" onClick={handleLike} /></div>
					<div className="likeText">{like ? ("좋아요!!") : ("")}</div>
				</div>
				<div>{post.text.length > 300 ? viewMore() : post.text}</div>
				<Link to={`/editpost${post.id}`}><button type="button" className="btn btn-primary mt-3" >글 수정</button></Link>
			</div>
			<div className="card-horizontal-meta">
				<div className="eskimo-author-meta">
					By <div className="author-meta">{post.author}</div>
				</div>
				<div className="eskimo-date-meta">
					{post.created}
				</div>
				<div className="eskimo-reading-meta">수정: {post.updated}</div>
			</div>
		</>
	);
}

export default Content;