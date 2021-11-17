import React from 'react';
import BlogPosts from './BlogPosts';
import PageTitle from './PageTitle';
import Sidebar from './Sidebar';
import TopIcons from './TopIcons';

function MainContainer() {
	return (
		<main id="eskimo-main-container">
			<div className="container">
				<Sidebar />
				<TopIcons />
				<div className="clearfix"></div>
				<PageTitle />
				<BlogPosts />
				<div className="clearfix"></div>
			</div>
		</main>
	);
}

export default MainContainer;