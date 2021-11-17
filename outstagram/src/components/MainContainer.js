import React from 'react';
import BlogPosts from './BlogPosts';
import PageTitle from './PageTitle';
import Sidebar from './Sidebar';
import Slider from './Slider';
import TopIcons from './TopIcons';

function MainContainer() {
	return (
		<main id="eskimo-main-container">
			<div className="container">
				<Sidebar />
				<TopIcons />
				<div className="clearfix"></div>
				<Slider />
				<PageTitle />
				<BlogPosts />
				<div className="clearfix"></div>
			</div>
		</main>
	);
}

export default MainContainer;