import React from 'react';

function MenuContainer() {
	return (
		<div id="eskimo-sidebar-cell" class="w-100">
			<div id="eskimo-menu-toggle">MENU</div>
			
			<nav id="eskimo-main-menu" class="menu-main-menu-container">
				<ul class="eskimo-menu-ul">
					<li><a href="#">Home</a></li>
				</ul>
			</nav>
		</div>
	);
}

export default MenuContainer;