import React, { useState } from 'react';
import PageTitle from '../PageTitle';
import SinglePostComments from '../ui/singlepost/SinglePostComments';
import SinglePostCommentWrite from '../ui/singlepost/SinglePostCommentWrite';
import SinglePostContents from '../ui/singlepost/SinglePostContents';

function SinglePost() {
	const [refreash, setRefreash] = useState(false);
	const [title, setTitle] = useState("");
	const [marks, setMarks] = useState("");
	return (
		<>
			<div id="eskimo-site-wrapper">
				<PageTitle title={title} />
				
				<main id="eskimo-main-container">
					<div className="container">
						<SinglePostContents setTitle={setTitle} setMarks={setMarks} />
						<SinglePostComments refreash={refreash} setRefreash={setRefreash} />
						<SinglePostCommentWrite setRefreash={setRefreash} />
					</div>
				</main>	
			</div>
		</>
	);
}

export default SinglePost;