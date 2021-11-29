import React from 'react';

function PageTitle({ title }) {
	return (
		<div className="eskimo-page-title" style={{ opacity: 1 }}>
			<h1 className="no-border">{title}</h1>
			{/* <div className="eskimo-page-title-meta">
				<div className="eskimo-author-meta">By Egemenerd</div>
				<div className="eskimo-cat-meta">In Lifestyle</div>
				<div className="eskimo-date-meta">May 25, 2018</div>
				<div className="eskimo-reading-meta">3 min read</div>
			</div> */}
		</div>
	);
}

export default PageTitle;