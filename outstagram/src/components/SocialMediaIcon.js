import React from 'react';

function SocialMediaIcon() {
	return (
		<div id="eskimo-social-cell" className="mt-auto w-100">
			<div id="eskimo-social-inner">
				<ul className="eskimo-social-icons">
					
					<li><a href="https://www.facebook.com/"><div><i className="fa fa-facebook-f"></i></div></a></li>
					<li><a href="https://twitter.com/"><div><i className="fa fa-twitter"></i></div></a></li>
					<li><a href="https://www.instagram.com/"><div><i className="fa fa-instagram"></i></div></a></li>
					<li><a href="https://www.tumblr.com/"><div><i className="fa fa-tumblr"></i></div></a></li>
				</ul>
				<div className="clearfix"></div>
			</div>
		</div>
	);
}

export default SocialMediaIcon;