import React from 'react';

function MainContainer() {
	return (
		<main id="eskimo-main-container">
			<div class="container">
				{/*<!-- SIDEBAR -->*/}
				<div id="eskimo-sidebar">
					<div id="eskimo-sidebar-wrapper" class="d-flex align-items-start flex-column h-100 w-100">
						{/*<!-- LOGO -->*/}
						<div id="eskimo-logo-cell" class="w-100">
							<a class="eskimo-logo-link" href="index.html">
								<img src="images/logo.png" class="eskimo-logo" alt="eskimo" />
							</a>
						</div>
						{/*<!-- MENU CONTAINER -->*/}
						<div id="eskimo-sidebar-cell" class="w-100">
							{/*<!-- MOBILE MENU BUTTON -->*/}
							<div id="eskimo-menu-toggle">MENU</div>
							{/*<!-- MENU -->*/}
							<nav id="eskimo-main-menu" class="menu-main-menu-container">
								<ul class="eskimo-menu-ul">
									<li><a href="#">Home</a>
										<ul class="sub-menu">
											<li><a href="index.html">Demo 1</a></li>
											<li><a href="index2.html">Demo 2</a></li>
											<li><a href="index3.html">Demo 3</a></li>
										</ul>
									</li>
									<li><a href="#">About Me</a>
										<ul class="sub-menu">
											<li><a href="about.html">Demo 1</a></li>
											<li><a href="about-2.html">Demo 2</a></li>
										</ul>
									</li>
									<li><a href="#">Blog</a>
										<ul class="sub-menu">
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
						</div>
						{/*<!-- SOCIAL MEDIA ICONS -->*/}
						<div id="eskimo-social-cell" class="mt-auto w-100">
							<div id="eskimo-social-inner">
								<ul class="eskimo-social-icons">
									<li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
									<li><a href="#"><i class="fa fa-instagram"></i></a></li>
									<li><a href="#"><i class="fa fa-vimeo"></i></a></li>
								</ul>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- TOP ICONS -->*/}
				<ul class="eskimo-top-icons">
					<li id="eskimo-panel-icon">
						<a href="#eskimo-panel" class="eskimo-panel-open"><i class="fa fa-bars"></i></a>
					</li>
					<li id="eskimo-search-icon">
						<a id="eskimo-open-search" href="#"><i class="fa fa-search"></i></a>
					</li>
				</ul>
				<div class="clearfix"></div>
				{/*<!-- BLOG POSTS -->*/}
				<div class="card card-horizontal">
					<div class="card-body">
						<div class="card-horizontal-left">
							<div class="card-category">
								<a href="category.html">Food &amp; Drink</a>
							</div>
							<h3 class="card-title"><a href="single-post.html">Ketchup Flavored Ice Cream!</a></h3>
							<div class="card-excerpt">
								<p>Mandaremus illum possumus ullamco e qui de nisi enim anim. Si nulla si nisi, veniam litteris sed excepteur ne ut amet deserunt tempor nam expetendis de enim mandaremus. Ita ea minim esse cillum ut eram arbitror ullamco. Tamen ad expetendis ab ipsum proident...</p>
							</div>
							<div class="card-horizontal-meta">
								<div class="eskimo-author-meta">
									By <a class="author-meta" href="author.html">Egemenerd</a>
								</div>
								<div class="eskimo-date-meta">
									<a href="single-post.html">May 28, 2018</a>
								</div>
								<div class="eskimo-reading-meta">3 min read</div>
							</div>
						</div>
						<div class="card-horizontal-right" data-img="images/1024x680.png">
							<a class="card-featured-img" href="single-post.html"></a>
						</div>
					</div>
				</div>
				{/*<!-- PAGINATION -->*/}
				<div class="eskimo-pager">
					<ul class='pagination flex-wrap'>
						<li class='page-item active'><a class='page-link' href='#'>1</a></li>
						<li class='page-item'><a class='page-link' href='#'>2</a></li>
						<li class='page-item'><a class='page-link' href='#'>3</a></li>
						<li class='page-item'><a class='page-link' href="#"><i class="fa fa-chevron-right"></i></a></li>
					</ul>
				</div>
				<div class="clearfix"></div>
			</div>
		</main>
	);
}

export default MainContainer;