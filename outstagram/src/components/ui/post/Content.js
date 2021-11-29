import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< Updated upstream:outstagram/src/components/ui/post/Content.js
function Content({ post, setRefreash }) {
=======

function Content({ post, refreash, comment }) {
>>>>>>> Stashed changes:outstagram/src/components/Content.js
	const url = `http://localhost:5001/post/${post.id}`;

	const handleLike = () => {
		axios.put(url, {
			...post, like: !post.like, likeCount: post.likeCount + 1
		}).then(setRefreash(true));
	}

	return (
		<>
			<div className="d-flex">
				<div className="d-inline-block">
					<div className="card-category">
						{
							post.categoryId && post.categoryId.map(item => (
								<span key={item.id} className="cardCategory">{item.name}</span>
							))
						}
					</div>
					<h3 className="card-title">{post.postTitle}</h3>
				</div>
			</div>

			<div className="card-excerpt">
				<Link to={`/singlepost${post.id}`}>
					<img src={`./images/${post.titleImage}`} alt="" />
				</Link>
				<div className="likeBox">
					<div className="like pointer" onClick={handleLike}>
						<img src={post.like ? ("./images/like_true.svg") : ("./images/like.svg")} alt="" />
					</div>
					<span className="text-muted likeCountNum">{post.likeCount}</span>
<<<<<<< Updated upstream:outstagram/src/components/ui/post/Content.js
					<div className="likeText">{post.like ? ("좋아요!!") : ("")}</div>
					<div className="eskimo-meta-tags mt-2">
=======
					<div className="likeText">{like ? ("좋아요!!") : ("")}</div>
					<div className="eskimo-meta-tags mt-3">
>>>>>>> Stashed changes:outstagram/src/components/Content.js
						{
							post.tags && post.tags.map(tag => (
								<span key={tag.id} className="badge badge-default">
									#{tag.tagName}
								</span>
							))
						}
					</div>
				</div>
				<div className="textBox">
					{post.text.length > 300 ? post.text.substr(0, 300) + "..." : post.text}
				</div>
				<div className="moreText">
					<Link to={`/singlepost${post.id}`}>
						<button type="button" className="btn btn-primary mt-3">더 보기</button>
					</Link>
				</div>

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