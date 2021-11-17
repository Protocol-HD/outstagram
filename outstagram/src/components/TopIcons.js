import React from 'react';

function TopIcons() {
	return (
		<ul className="eskimo-top-icons">
			<li id="eskimo-panel-icon">
				<a href="#eskimo-panel" className="eskimo-panel-open"><i className="fa fa-bars"></i></a>
			</li>
			<li id="eskimo-search-icon">
				<a id="eskimo-open-search" href="#"><i className="fa fa-search"></i></a>
			</li>
		</ul>
	);
}

export default TopIcons;