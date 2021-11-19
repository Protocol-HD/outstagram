
import { useState } from 'react';
import Comments from './Comments';
import CommentWrite from './CommentWrite';
import Content from './Content';

function Post({ post }) {
	const [commentAdd, setCommentAdd] = useState(false);

	return (
		<div className="card card-horizontal">
			<div className="card-body">
				<div className="card-horizontal-left">
					<Content post={post} />
					<hr />
					<Comments postId={post.id} commentAdd={commentAdd} setCommentAdd ={setCommentAdd}/>
					<CommentWrite postId={post.id} setCommentAdd={setCommentAdd}/>
				</div>
			</div>
		</div>
	);
}

export default Post;