import React from 'react';
import Sidebar from './layout/Sidebar';
import TopIcons from './widget/TopIcons';
import BlogPosts from './layout/BlogPosts';
import Pagination from './layout/Pagination';
import SearchBox from './widget/SearchBox';
import Nav from './layout/Nav';

function MainContainer() {
	return (
		<main id="eskimo-main-container">
			<div class="container">
				<Sidebar />
				<Nav />
				<SearchBox />
				<div class="clearfix"></div>
				<BlogPosts />
				<BlogPosts />
				<BlogPosts />
				<BlogPosts />
				<BlogPosts />
				<Pagination />
			</div>
		</main>
	);
}

export default MainContainer;