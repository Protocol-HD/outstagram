import React from 'react';

function MainContainer() {
	return (
		<main id="eskimo-main-container">
			<div className="container">
				{/*<!-- SIDEBAR -->*/}
				<div id="eskimo-sidebar">
					<div id="eskimo-sidebar-wrapper" className="d-flex align-items-start flex-column h-100 w-100">
						{/*<!-- LOGO -->*/}
						<div id="eskimo-logo-cell" className="w-100">
							<a className="eskimo-logo-link" href="index.html">
								<img src="images/logo.png" className="eskimo-logo" alt="eskimo" />
							</a>
						</div>
						{/*<!-- MENU CONTAINER -->*/}
						<div id="eskimo-sidebar-cell" className="w-100">
							{/*<!-- MOBILE MENU BUTTON -->*/}
							<div id="eskimo-menu-toggle">MENU</div>
							{/*<!-- MENU -->*/}
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
						</div>
						{/*<!-- SOCIAL MEDIA ICONS -->*/}
						<div id="eskimo-social-cell" className="mt-auto w-100">
							<div id="eskimo-social-inner">
								<ul className="eskimo-social-icons">
									<li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
									<li><a href="#"><i className="fa fa-instagram"></i></a></li>
									<li><a href="#"><i className="fa fa-vimeo"></i></a></li>
								</ul>
								<div className="clearfix"></div>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- TOP ICONS -->*/}
				<ul className="eskimo-top-icons">
					<li id="eskimo-panel-icon">
						<a href="#eskimo-panel" className="eskimo-panel-open"><i className="fa fa-bars"></i></a>
					</li>
					<li id="eskimo-search-icon">
						<a id="eskimo-open-search" href="#"><i className="fa fa-search"></i></a>
					</li>
				</ul>
				<div className="clearfix"></div>
				{/*<!-- PAGE TITLE -->*/}
				<div className="eskimo-page-title">
					<h1 className="no-border">Blog - Full Width</h1>
				</div>
				{/*<!-- BLOG POSTS -->*/}
				{/*<!-- POST 1 -->*/}
				<div className="card card-horizontal">
					<div className="card-body">
						<div className="card-horizontal-left">
							<div className="card-category">
								<a href="category.html">Food &amp; Drink</a>
							</div>
							<h3 className="card-title"><a href="single-post.html">Ketchup Flavored Ice Cream!</a></h3>
							<div className="card-excerpt">
								<p>Mandaremus illum possumus ullamco e qui de nisi enim anim. Si nulla si nisi, veniam litteris sed excepteur ne ut amet deserunt tempor nam expetendis de enim mandaremus. Ita ea minim esse cillum ut eram arbitror ullamco. Tamen ad expetendis ab ipsum proident...</p>
							</div>
							<div className="card-horizontal-meta">
								<div className="eskimo-author-meta">
									By <a className="author-meta" href="author.html">Egemenerd</a>
								</div>
								<div className="eskimo-date-meta">
									<a href="single-post.html">May 28, 2018</a>
								</div>
								<div className="eskimo-reading-meta">3 min read</div>
							</div>
						</div>
						<div className="card-horizontal-right" data-img="images/1024x680.png">
							<a className="card-featured-img" href="single-post.html"></a>
						</div>
					</div>
				</div>
				{/*<!-- POST 2 -->*/}
				<div className="card card-horizontal">
					<div className="card-body">
						<div className="card-horizontal-left">
							<div className="card-category">
								<a href="category.html">Lifestyle</a>
							</div>
							<h3 className="card-title">
								<a href="single-post.html">Hair You've Always Dreamed Of</a>
							</h3>
							<div className="card-excerpt">
								<p>Ex si esse deserunt, et dolore occaecat, singulis tamen e possumus voluptatibus, varias cernantur si aute quid. Noster vidisse iis exquisitaque, deserunt te irure. Ubi illum nostrud fidelissimae id occaecat duis probant. Occaecat hic quorum aliquip se...</p>
							</div>
							<div className="card-horizontal-meta">
								<div className="eskimo-author-meta">
									By <a className="author-meta" href="author.html">Egemenerd</a>
								</div>
								<div className="eskimo-date-meta">
									<a href="single-post.html">May 27, 2018</a>
								</div>
								<div className="eskimo-reading-meta">3 min read</div>
							</div>
						</div>
						<div className="card-horizontal-right" data-img="images/1024x680.png">
							<a className="card-featured-img" href="single-post.html"></a>
						</div>
					</div>
				</div>
				{/*<!-- POST 3 -->*/}
				<div className="card card-horizontal">
					<div className="card-body">
						<div className="card-horizontal-left">
							<div className="card-category">
								<a href="category.html">Lifestyle</a>, <a href="category.html">Travel</a>
							</div>
							<h3 className="card-title">
								<a href="single-post.html">15 Of The World's Best Carnivals</a>
							</h3>
							<div className="card-excerpt">
								<p>Aliquip e duis. Se labore ullamco excepteur iis ullamco sint duis laboris amet sed ita occaecat de cernantur quo fore coniunctione voluptate enim senserit. Si ut nulla laboris, an eiusmod e incididunt. Non varias enim duis singulis, a quorum cupidatat. Voluptate summis...</p>
							</div>
							<div className="card-horizontal-meta">
								<div className="eskimo-author-meta">
									By <a className="author-meta" href="author.html">Egemenerd</a>
								</div>
								<div className="eskimo-date-meta">
									<a href="single-post.html">May 25, 2018</a>
								</div>
								<div className="eskimo-reading-meta">2 min read</div>
							</div>
						</div>
						<div className="card-horizontal-right" data-img="images/1024x680.png">
							<a className="card-featured-img" href="single-post.html"></a>
						</div>
					</div>
				</div>
				{/*<!-- POST 4 -->*/}
				<div className="card card-horizontal">
					<div className="card-body">
						<div className="card-horizontal-left">
							<div className="card-category">
								<a href="category.html">Lifestyle</a>
							</div>
							<h3 className="card-title">
								<a href="single-post.html">5 Ways to a Healthy Lifestyle</a>
							</h3>
							<div className="card-excerpt">
								<p>Mandaremus veniam ab cupidatat exquisitaque, e quae laboris domesticarum, non sint mentitum fabulas de anim proident transferrem, ita aliqua imitarentur in in labore illum eram offendit, nisi fidelissimae possumus noster ullamco se eiusmod multos ex...</p>
							</div>
							<div className="card-horizontal-meta">
								<div className="eskimo-author-meta">
									By <a className="author-meta" href="author.html">Egemenerd</a>
								</div>
								<div className="eskimo-date-meta">
									<a href="single-post.html">May 25, 2018</a>
								</div>
								<div className="eskimo-reading-meta">3 min read</div>
							</div>
						</div>
						<div className="card-horizontal-right" data-img="images/1024x680.png">
							<a className="card-featured-img" href="single-post.html"></a>
						</div>
					</div>
				</div>
				{/*<!-- POST 5 -->*/}
				<div className="card card-horizontal">
					<div className="card-body">
						<div className="card-horizontal-left">
							<div className="card-category">
								<a href="category.html">Food &amp; Drink</a>, <a href="category.html">Travel</a>
							</div>
							<h3 className="card-title">
								<a href="single-post.html">Best Breakfast In The World</a>
							</h3>
							<div className="card-excerpt">
								<p>Fabulas relinqueret aut quamquam. Lorem possumus pariatur ut quibusdam transferrem an tempor. E consequat nam senserit, aliquip tamen est commodo illustriora. An cillum sunt ut quamquam. Laboris culpa occaecat, quo fugiat dolore varias consequat...</p>
							</div>
							<div className="card-horizontal-meta">
								<div className="eskimo-author-meta">
									By <a className="author-meta" href="author.html">Egemenerd</a>
								</div>
								<div className="eskimo-date-meta">
									<a href="single-post.html">May 23, 2018</a>
								</div>
								<div className="eskimo-reading-meta">3 min read</div>
							</div>
						</div>
						<div className="card-horizontal-right" data-img="images/1024x680.png">
							<a className="card-featured-img" href="single-post.html"></a>
						</div>
					</div>
				</div>
				{/*<!-- POST 6 -->*/}
				<div className="card card-horizontal">
					<div className="card-body">
						<div className="card-horizontal-left">
							<div className="card-category">
								<a href="category.html">Food &amp; Drink</a>
							</div>
							<h3 className="card-title">
								<a href="single-post.html">Best and Worst Summer Foods</a>
							</h3>
							<div className="card-excerpt">
								<p>Admodum comprehenderit id non cillum anim de appellat, ubi tamen singulis sempiternum, occaecat sunt appellat appellat ex varias an in quem laborum an si ita quid multos irure do excepteur culpa quamquam. Nam aliqua iudicem aliquip o sunt cupidatat...</p>
							</div>
							<div className="card-horizontal-meta">
								<div className="eskimo-author-meta">
									By <a className="author-meta" href="author.html">Egemenerd</a>
								</div>
								<div className="eskimo-date-meta">
									<a href="single-post.html">May 22, 2018</a>
								</div>
								<div className="eskimo-reading-meta">3 min read</div>
							</div>
						</div>
						<div className="card-horizontal-right" data-img="images/1024x680.png">
							<a className="card-featured-img" href="single-post.html"></a>
						</div>
					</div>
				</div>
				{/*<!-- POST 7 -->*/}
				<div className="card card-horizontal">
					<div className="card-body">
						<div className="card-horizontal-left">
							<div className="card-category">
								<a href="category.html">Lifestyle</a>
							</div>
							<h3 className="card-title">
								<a href="single-post.html">What Is Perfect Training?</a>
							</h3>
							<div className="card-excerpt">
								<p>Non in familiaritatem, esse mentitum deserunt. Sunt excepteur quamquam. Enim ullamco consequat, nisi se singulis non fugiat. Nulla laboris tractavissent, tempor hic illum vidisse. Tempor qui noster incurreret, officia in ingeniis ubi in sunt arbitror ubi...</p>
							</div>
							<div className="card-horizontal-meta">
								<div className="eskimo-author-meta">
									By <a className="author-meta" href="author.html">Egemenerd</a>
								</div>
								<div className="eskimo-date-meta">
									<a href="single-post.html">May 21, 2018</a>
								</div>
								<div className="eskimo-reading-meta">2 min read</div>
							</div>
						</div>
						<div className="card-horizontal-right" data-img="images/1024x680.png">
							<a className="card-featured-img" href="single-post.html"></a>
						</div>
					</div>
				</div>
				{/*<!-- POST 8 -->*/}
				<div className="card card-horizontal">
					<div className="card-body">
						<div className="card-horizontal-left">
							<div className="card-category">
								<a href="category.html">Technology</a>
							</div>
							<h3 className="card-title">
								<a href="single-post.html">The Best Cameras For Beginners</a>
							</h3>
							<div className="card-excerpt">
								<p>Pariatur ab enim ita in ne philosophari, cillum incididunt voluptate hic aut quorum vidisse distinguantur, quis possumus cohaerescant, mentitum eruditionem iis aliquip, ubi quem possumus quamquam ea o eiusmod graviterque culpa expetendis ingeniis...</p>
							</div>
							<div className="card-horizontal-meta">
								<div className="eskimo-author-meta">
									By <a className="author-meta" href="author.html">Egemenerd</a>
								</div>
								<div className="eskimo-date-meta">
									<a href="single-post.html">May 20, 2018</a>
								</div>
								<div className="eskimo-reading-meta">2 min read</div>
							</div>
						</div>
						<div className="card-horizontal-right" data-img="images/1024x680.png">
							<a className="card-featured-img" href="single-post.html"></a>
						</div>
					</div>
				</div>
				{/*<!-- PAGINATION -->*/}
				<div className="eskimo-pager">
					<ul className='pagination flex-wrap'>
						<li className='page-item active'><a className='page-link' href='#'>1</a></li>
						<li className='page-item'><a className='page-link' href='#'>2</a></li>
						<li className='page-item'><a className='page-link' href='#'>3</a></li>
						<li className='page-item'><a className='page-link' href="#"><i className="fa fa-chevron-right"></i></a></li>
					</ul>
				</div>
				<div className="clearfix"></div>
			</div>
		</main>
	);
}

export default MainContainer;