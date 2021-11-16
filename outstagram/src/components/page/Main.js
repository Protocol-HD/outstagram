import React from 'react';
import SiteWrapper from '../SiteWrapper';
import GoToTopButton from '../widget/GoToTopButton';
import ReadingPositionIndicator from '../widget/ReadingPositionIndicator';
import FullscreenSearch from "../layout/FullscreenSearch";

function Main() {
	return (
		<>
			<ReadingPositionIndicator />
			<SiteWrapper />
			<GoToTopButton />
			<FullscreenSearch />
		</>
	);
}

export default Main;                                                   