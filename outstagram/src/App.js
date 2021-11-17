import './App.css';
import FullscreenSearch from './components/FullscreenSearch';
import GoToTopButton from './components/GoToTopButton';
import ReadingPositionIndicator from './components/ReadingPositionIndicator';
import SiteWrapper from './components/SiteWrapper';
import SlidePanel from './components/SlidePanel';
import SlidePanelOverlay from './components/SlidePanelOverlay';


function App() {
	return (
		<div className="App">
			<ReadingPositionIndicator />
			<SiteWrapper />
			<GoToTopButton />
			<SlidePanelOverlay />
			<SlidePanel />
			<FullscreenSearch />
		</div>
	);
}

export default App;
