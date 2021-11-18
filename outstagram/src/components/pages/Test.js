import React from 'react';
import AddCategories from '../AddCategories';
import AddPost from '../AddPost';
import AddSns from '../AddSns';

function Test() {
	return (
		<div id="eskimo-site-wrapper">
			<div className="testBox">
				<AddSns />
				<AddCategories />
				<AddPost />
			</div>
		</div>
	);
}

export default Test;