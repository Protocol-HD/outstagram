import { useEffect, useState } from 'react';
import Comments from './Comments';
import CommentWrite from './CommentWrite';
import Content from './Content';
import axios from 'axios';

function Post() {
	const url = `http://localhost:5001/post`;
	const [posts, setPosts] = useState([]);
	const [refreash, setRefreash] = useState(false);

	useEffect(() => {
		axios.get(url).then(Response => setPosts(Response.data.reverse())).then(setRefreash(false));
	}, [url, refreash, setRefreash]);
	return (
		posts.map(post => {
			return (
				<div key={post.id} className="card card-horizontal">
					<div className="card-body">
						<div className="card-horizontal-left">
							<Content post={post} setRefreash={setRefreash} />
							<hr />
							<Comments postId={post.id} refreash={refreash} setRefreash={setRefreash} />
							<CommentWrite postId={post.id} setRefreash={setRefreash} />
						</div>
					</div>
				</div>
			);
		})
	);
}

export default Post;