import React from 'react';

function SearchBox() {
	return (
		<div class="input-group">
			<input type="text" class="form-control form-control-lg" placeholder="Enter a keyword..." name="s" />
			<div class="input-group-append">
				<button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
			</div>
		</div>
	);
}

export default SearchBox;