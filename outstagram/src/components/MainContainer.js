import React from 'react';
import BlogPosts from './BlogPosts';
import PageTitle from './PageTitle';
import Slider from './Slider';
import TopIcons from './TopIcons';

function MainContainer({ setSearch }) {
	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title="SNS Contents" />
			<main id="eskimo-main-container">
				<div className="container">
					<TopIcons setSearch={setSearch} />
					<Slider />
					<BlogPosts />
				</div>
			</main>
		</div>
	);
}

export default MainContainer;
