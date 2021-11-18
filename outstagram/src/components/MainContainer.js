import React from 'react';
import BlogPosts from './BlogPosts';
import PageTitle from './PageTitle';
import Slider from './Slider';
import TopIcons from './TopIcons';

function MainContainer() {
	return (
		<main id="eskimo-main-container">
			<div className="container">
				<TopIcons />
				<div className="clearfix"></div>
				<Slider />
				<PageTitle title = "SNS Contents" />
				<BlogPosts />
				<div className="clearfix"></div>
			</div>
		</main>
	);
}

export default MainContainer;

// 사이드바 여기서 뺌