import React from 'react';
import Sidebar from './layout/Sidebar';
import TopIcons from './widget/TopIcons';
import BlogPosts from './layout/BlogPosts';
import Pagination from './layout/Pagination';

function MainContainer() {
	return (
		<main id="eskimo-main-container">
			<div class="container">
				<Sidebar />
				<TopIcons />
				<div class="clearfix"></div>
				<BlogPosts />
				<Pagination />
			</div>
		</main>
	);
}

export default MainContainer;