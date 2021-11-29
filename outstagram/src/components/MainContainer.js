import React, { useState } from 'react';
import PageTitle from './PageTitle';
import Slider from './widgets/Slider';
// import TopIcons from './widgets/TopIcons';
import FullscreenSearch from './FullscreenSearch'
import Post from './pages/Post';

function MainContainer() {
	const [search, setSearch] = useState(false);
	return (
		<>
			<div id="eskimo-site-wrapper">
				<PageTitle title="SNS Contents" />
				<main id="eskimo-main-container">
					<div className="container">
						{/* <TopIcons setSearch={setSearch} /> */}
						<Slider />
						<Post />
					</div>
				</main>
			</div>
			<FullscreenSearch search={search} setSearch={setSearch} />
		</>
	);
}

export default MainContainer;
