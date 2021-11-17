import React from 'react';

function Menu() {
	return (
		<nav id="eskimo-main-menu" className="menu-main-menu-container">
			<ul className="eskimo-menu-ul">
				<li><a href="#">Home</a>
					<ul className="sub-menu">
						<li><a href="index.html">Demo 1</a></li>
						<li><a href="index2.html">Demo 2</a></li>
						<li><a href="index3.html">Demo 3</a></li>
					</ul>
				</li>
				<li><a href="#">About Me</a>
					<ul className="sub-menu">
						<li><a href="about.html">Demo 1</a></li>
						<li><a href="about-2.html">Demo 2</a></li>
					</ul>
				</li>
				<li><a href="#">Blog</a>
					<ul className="sub-menu">
						<li><a href="blog.html">Full Width</a></li>
						<li><a href="blog-2-column.html">2 Column</a></li>
						<li><a href="blog-3-column.html">3 Column</a></li>
						<li><a href="single-post.html">Single Post</a></li>
					</ul>
				</li>
				<li><a href="galleries.html">Galleries</a></li>
				<li><a href="other-features.html">Other Features</a></li>
			</ul>
		</nav>
	);
}

export default Menu;