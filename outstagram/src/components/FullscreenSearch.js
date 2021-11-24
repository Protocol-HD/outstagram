import React, { useRef, useState } from 'react';

function FullscreenSearch({ search, setSearch }) {
	const refSearch = useRef();

	//검색 기능용
	const [posts, setPosts] = useState([]);

	const onSubmit = (event) => {
		event.preventDefault();

		fetch(`http://localhost:3005/post`)
			.then(res => {
				return (res.json());
			})
			.then(data => setPosts(data));
	}

	return (
		<div id="eskimo-fullscreen-search" className="pointer" style={search ? { display: 'block' } : { display: 'none' }}>
			<div id="eskimo-fullscreen-search-content">
				<a onClick={() => setSearch(false)} id="eskimo-close-search"><i className="fa fa-times"></i></a>
				<form onSubmit={onSubmit} role="search" method="get" action="search.html" className="eskimo-lg-form">
					<div className="input-group">
						<input type="text" className="form-control form-control-lg" placeholder="Enter a keyword..." name="s" ref={refSearch} />
						<div className="input-group-append">
							<button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default FullscreenSearch;