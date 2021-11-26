import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function Content({ post, refreash, comment }) {
	const url = `http://localhost:5001/post/${post.id}`;
	const commentUrl = `http://localhost:5002/comments/`;
	const handleLike = () => {
		axios.put(url, { ...post, like: !post.like });
		axios.put(url, { ...post, likeCount: post.likeCount + 1 })
		refreash();

	}

	const delPost = () => {
		if (window.confirm("정말 삭제하시겠습니까?")) {
			comment.map(commnt => axios.delete(commentUrl + commnt.id));
			axios.delete(commentUrl)
			axios.delete(url).then(refreash());
		}
	}

	return (
		<>
			<div className="d-flex justify-content-between">
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
				<div>
					<Link to={`/editpost${post.id}`}>
						<button type="button" className="btn btn-primary mt-3">Edit</button>
					</Link>
					<button type="button" className="btn btn-secondary mt-3" onClick={delPost}>Del</button>
				</div>
			</div>

			<div className="card-excerpt">
				<img src={`./images/${post.titleImage}`} alt="" />
				<div className="likeBox">
					<div className="like">
						<img src={post.like ? ("./images/like_true.svg") : ("./images/like.svg")} alt="" onClick={handleLike} />
					</div>
					<span className="text-muted likeCountNum">{post.likeCount}</span>
					<div className="likeText">{post.like ? ("좋아요!!") : ("")}</div>
					<div className="eskimo-meta-tags mt-2">
						{
							post.tags && post.tags.map(tag => (
								<span key={tag.id} className="badge badge-default">
									#{tag.tagName}
								</span>
							))
						}
					</div>
				</div>
				<div>
					{post.text.length > 300 ? post.text.substr(0, 300) + "..." : post.text}
				</div>
				<div>
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