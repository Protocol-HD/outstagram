import React from 'react';
import SlidePanel from '../layout/SlidePanel';
import SiteWrapper from '../SiteWrapper';
import SlidePanelOverlay from '../ui/SlidePanelOverlay';
import GoToTopButton from '../widget/GoToTopButton';
import ReadingPositionIndicator from '../widget/ReadingPositionIndicator';
import FullscreenSearch from "../layout/FullscreenSearch";

function Main() {
	return (
		<>
			<ReadingPositionIndicator />
			<SiteWrapper />
			<GoToTopButton />
			<SlidePanelOverlay />
			<SlidePanel />
			<FullscreenSearch />
		</>
	);
}

export default Main;                                                   