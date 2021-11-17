import React from 'react';
import Creadits from './Creadits';
import FooterWrapper from './FooterWrapper';

function Footer() {
	return (
		<footer id="eskimo-footer">
			<div className="container">
				<FooterWrapper />
				<Creadits />
			</div>
		</footer>
	);
}

export default Footer;