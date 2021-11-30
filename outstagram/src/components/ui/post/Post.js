import { useEffect, useState } from 'react';
import Comments from './Comments';
import CommentWrite from './CommentWrite';
import Content from './Content';
import axios from 'axios';

function Post({ more }) {
	const url = `http://localhost:5001/post?_end=`;
	const [posts, setPosts] = useState([]);
	const [refreash, setRefreash] = useState(false);

	useEffect(() => {
		axios.get(url + more).then(Response => setPosts(Response.data)).then(setRefreash(false));
	}, [url, refreash, setRefreash, more]);


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