import React from 'react';
import AddPost from '../AddPost';
import PageTitle from '../PageTitle';

function AddPostPage() {
	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title="Add Post" />
			<div className="testBox">
				<AddPost />
			</div>
		</div>
	);
}

export default AddPostPage;