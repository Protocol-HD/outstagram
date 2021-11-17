import React from 'react';
import Menu from './Menu';
import MobileMenuButton from './MobileMenuButton';

function MenuContainer() {
	return (
		<div id="eskimo-sidebar-cell" className="w-100">
			<MobileMenuButton />
			<Menu />
		</div>
	);
}

export default MenuContainer;