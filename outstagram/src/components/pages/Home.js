import React from 'react';
import FullscreenSearch from '../FullscreenSearch';
import GoToTopButton from '../GoToTopButton';
import ReadingPositionIndicator from '../ReadingPositionIndicator';
import SiteWrapper from '../SiteWrapper';
import SlidePanel from '../SlidePanel';
import SlidePanelOverlay from '../SlidePanelOverlay';

function Home() {
	return (
		<>
			<ReadingPositionIndicator />
			<SiteWrapper />
			<SlidePanelOverlay />
			<SlidePanel />
			<FullscreenSearch />
		</>
	);
}

export default Home;