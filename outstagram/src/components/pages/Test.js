import React from 'react';
import AddCategories from '../AddCategories';
import AddPost from '../AddPost';
import AddSns from '../AddSns';
import PageTitle from '../PageTitle';

function Test() {
	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title = "Write" />
			<div className="testBox">
				<AddSns />
				<AddCategories />
				<AddPost />
			</div>
		</div>
	);
}

export default Test;