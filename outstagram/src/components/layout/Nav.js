import React from 'react';
import SearchBox from '../widget/SearchBox';

function Nav() {
	return (
		<nav className="navbar navbar-light bg-light navbar fixed-top navbar-light bg-light">
			<div className="container-fluid">
				<img src="images/Outstagram_Logo.png" width="200px" class="eskimo-logo" alt="eskimo" />
				<form className="d-flex">
					<SearchBox />
				</form>
			</div>
		</nav>
	);
}

export default Nav;