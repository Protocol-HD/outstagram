import React from 'react';

function PageTitle({ title }) {
	return (
		<div className="eskimo-page-title" style={{opacity: 1}}>
			<h1 className="no-border">{title}</h1>
		</div>
	);
}

export default PageTitle;