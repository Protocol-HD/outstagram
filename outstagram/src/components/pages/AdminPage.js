import React from 'react';
import AddCategories from '../AddCategories';
import AddSns from '../AddSns';
import PageTitle from '../PageTitle';

function AdminPage() {
	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title = "Admin Page" />
			<div className="testBox">
				<AddSns />
				<AddCategories />
			</div>
		</div>
	);
}

export default AdminPage;