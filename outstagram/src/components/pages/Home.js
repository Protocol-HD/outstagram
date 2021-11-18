import React from 'react';
import FullscreenSearch from '../FullscreenSearch';
import MainContainer from '../MainContainer';
import ReadingPositionIndicator from '../ReadingPositionIndicator';
import SlidePanel from '../SlidePanel';
import SlidePanelOverlay from '../SlidePanelOverlay';

function Home() {
	return (
		<>
			<ReadingPositionIndicator />
			<MainContainer />
			<SlidePanelOverlay />
			<SlidePanel />
			<FullscreenSearch />
		</>
	);
}

export default Home;