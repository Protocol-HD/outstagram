import React from 'react';

function Pagination() {
	return (
		<div class="eskimo-pager">
			<ul class='pagination flex-wrap'>
				<li class='page-item active'><a class='page-link' href='#'>1</a></li>
				<li class='page-item'><a class='page-link' href='#'>2</a></li>
				<li class='page-item'><a class='page-link' href='#'>3</a></li>
				<li class='page-item'><a class='page-link' href="#"><i class="fa fa-chevron-right"></i></a></li>
			</ul>
		</div>
	);
}

export default Pagination;