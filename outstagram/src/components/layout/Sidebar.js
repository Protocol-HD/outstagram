import React from 'react';
import Logo from '../ui/Logo';
import MenuContainer from '../layout/MenuContainer';

function Sidebar() {
	return (
		<div id="eskimo-sidebar">
			<div id="eskimo-sidebar-wrapper" class="d-flex align-items-start flex-column h-100 w-100">
				<Logo />
				<MenuContainer />
			</div>
		</div>
	);
}

export default Sidebar;