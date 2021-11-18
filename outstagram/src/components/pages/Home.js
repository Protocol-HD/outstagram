import React, { useState } from 'react';
import FullscreenSearch from '../FullscreenSearch';
import MainContainer from '../MainContainer';
import ReadingPositionIndicator from '../ReadingPositionIndicator';
import SlidePanel from '../SlidePanel';
import SlidePanelOverlay from '../SlidePanelOverlay';

function Home() {
	const [search, setSearch] = useState(false);

	return (
		<>
			<ReadingPositionIndicator />
			<MainContainer setSearch={setSearch} />
			<SlidePanelOverlay />
			<SlidePanel />
			<FullscreenSearch search={search} setSearch={setSearch}/>
		</>
	);
}

export default Home;