import React, { useEffect, useState } from 'react';

function Gallery({ Url }) {
	const [imgUrl, setImgUrl] = useState("");

	useEffect(() => {
		setImgUrl(`../images/${Url}`);
	}, []);

	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-3">
			<img className="gallery" src={imgUrl} alt="설명" />
		</div>
	);
}

export default Gallery;