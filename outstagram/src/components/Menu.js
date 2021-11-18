import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
	return (
		<nav id="eskimo-main-menu" className="menu-main-menu-container">
			<ul className="eskimo-menu-ul">
				<li><Link to={"/"}>Home</Link></li>
				<li><Link to={"/test/"}>Write</Link></li>
				<li><Link to={"/"}>Galleries</Link></li>
			</ul>
		</nav>
	);
}

export default Menu;