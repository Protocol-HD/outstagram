import React from 'react';
import Creadits from './Creadits';
import FooterWrapper from './FooterWrapper';

function Footer() {
	return (
		<div id="eskimo-site-wrapper">
			<footer id="eskimo-footer">
				<div className="container">
					<FooterWrapper />
					<Creadits />
				</div>
			</footer>
		</div>
	);
}

export default Footer;