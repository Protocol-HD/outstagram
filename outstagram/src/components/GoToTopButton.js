import React from 'react';

function GoToTopButton() {
	return (
		<a id="eskimo-gototop" onClick={() => window.scrollTo(0, 0)}><i className="fa fa-chevron-up"></i></a>
	);
}

export default GoToTopButton;