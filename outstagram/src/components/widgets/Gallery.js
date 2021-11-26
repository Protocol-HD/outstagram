import React from 'react';

function Gallery({ titleImage }) {
	return (
		<img
			src={`./images/${titleImage}`}
			className="col-12 col-md-6 col-xl-4 img-fluid overviewImg"
			alt=""
		/>
	);
}

export default Gallery;