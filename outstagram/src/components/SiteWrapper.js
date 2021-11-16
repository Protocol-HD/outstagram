import React from 'react';

function SiteWrapper() {
	return (
		<div id="eskimo-site-wrapper">
			{/*<!-- MAIN CONTAINER -->*/}
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
					{/*<!-- SLIDER -->*/}
					<div className="eskimo-carousel-container eskimo-bg-loader">
						<div id="eskimo-post-slider" className="eskimo-slider">
							{/*<!-- SLIDE 1 -->*/}
							<div>
								<a className="eskimo-slider-img" href="single-post.html"></a>
								<ul className="eskimo-slider-image-meta eskimo-image-meta-post">
									<li><a href="single-post.html"><span className="badge badge-default">May 28, 2018</span></a>
									</li>
									<li><a href="category.html"><span className="badge badge-default">Food &amp;
										Drink</span></a></li>
								</ul>
								<div className="clearfix"></div>
								<img src="images/1200x600.png" alt="Ketchup Flavored Ice Cream!" />
								<div className="eskimo-slider-desc">
									<div className="eskimo-slider-desc-inner">
										<h2 className="card-title">Ketchup Flavored Ice Cream!</h2>
										<p>Mandaremus illum possumus ullamco e qui de nisi enim anim. Si nulla si nisi, veniam
											litteris sed excepteur ne ut amet deserunt tempor nam expetendis de enim mandaremus.
											Ita ea minim esse cillum ut eram arbitror ullamco. Tamen ad expetendis ab ipsum
											proident</p>
									</div>
								</div>
							</div>
							{/*<!-- SLIDE 2 -->*/}
							<div>
								<a className="eskimo-slider-img" href="single-post.html"></a>
								<ul className="eskimo-slider-image-meta eskimo-image-meta-post">
									<li><a href="single-post.html"><span className="badge badge-default">May 27, 2018</span></a>
									</li>
									<li><a href="category.html"><span className="badge badge-default">Lifestyle</span></a></li>
								</ul>
								<div className="clearfix"></div>
								<img src="images/1200x600.png" alt="Hair You've Always Dreamed Of" />
								<div className="eskimo-slider-desc">
									<div className="eskimo-slider-desc-inner">
										<h2 className="card-title">Hair You've Always Dreamed Of</h2>
										<p>Ex si esse deserunt, et dolore occaecat, singulis tamen e possumus voluptatibus,
											varias cernantur si aute quid. Noster vidisse iis exquisitaque, deserunt te irure.
											Ubi illum nostrud fidelissimae id occaecat duis probant. Occaecat hic quorum aliquip
											se</p>
									</div>
								</div>
							</div>
							{/*<!-- SLIDE 3 -->*/}
							<div>
								<a className="eskimo-slider-img" href="single-post.html"></a>
								<ul className="eskimo-slider-image-meta eskimo-image-meta-post">
									<li><a href="single-post.html"><span className="badge badge-default">May 25, 2018</span></a>
									</li>
									<li><a href="category.html"><span className="badge badge-default">Lifestyle</span></a></li>
									<li><a href="category.html"><span className="badge badge-default">Travel</span></a></li>
								</ul>
								<div className="clearfix"></div>
								<img src="images/1200x600.png" alt="15 Of The World's Best Carnivals" />
								<div className="eskimo-slider-desc">
									<div className="eskimo-slider-desc-inner">
										<h2 className="card-title">15 Of The World's Best Carnivals</h2>
										<p>Aliquip e duis. Se labore ullamco excepteur iis ullamco sint duis laboris amet sed
											ita occaecat de cernantur quo fore coniunctione voluptate enim senserit. Si ut nulla
											laboris, an eiusmod e incididunt. Non varias enim duis singulis, a quorum cupidatat.
											Voluptate summis</p>
									</div>
								</div>
							</div>
							{/*<!-- SLIDE 4 -->*/}
							<div>
								<a className="eskimo-slider-img" href="single-post.html"></a>
								<ul className="eskimo-slider-image-meta eskimo-image-meta-post">
									<li><a href="single-post.html"><span className="badge badge-default">May 25, 2018</span></a>
									</li>
									<li><a href="category.html"><span className="badge badge-default">Lifestyle</span></a></li>
								</ul>
								<div className="clearfix"></div>
								<img src="images/1200x600.png" alt="5 Ways to a Healthy Lifestyle" />
								<div className="eskimo-slider-desc">
									<div className="eskimo-slider-desc-inner">
										<h2 className="card-title">5 Ways to a Healthy Lifestyle</h2>
										<p>Mandaremus veniam ab cupidatat exquisitaque, e quae laboris domesticarum, non sint
											mentitum fabulas de anim proident transferrem, ita aliqua imitarentur in in labore
											illum eram offendit, nisi fidelissimae possumus noster ullamco se eiusmod multos ex
										</p>
									</div>
								</div>
							</div>
							{/*<!-- SLIDE 5 -->*/}
							<div>
								<a className="eskimo-slider-img" href="single-post.html"></a>
								<ul className="eskimo-slider-image-meta eskimo-image-meta-post">
									<li><a href="single-post.html"><span className="badge badge-default">May 23, 2018</span></a>
									</li>
									<li><a href="category.html"><span className="badge badge-default">Food &amp;
										Drink</span></a></li>
									<li><a href="category.html"><span className="badge badge-default">Travel</span></a></li>
								</ul>
								<div className="clearfix"></div>
								<img src="images/1200x600.png" alt="Best Breakfast In The World" />
								<div className="eskimo-slider-desc">
									<div className="eskimo-slider-desc-inner">
										<h2 className="card-title">Best Breakfast In The World</h2>
										<p>Fabulas relinqueret aut quamquam. Lorem possumus pariatur ut quibusdam transferrem an
											tempor. E consequat nam senserit, aliquip tamen est commodo illustriora. An cillum
											sunt ut quamquam. Laboris culpa occaecat, quo fugiat dolore varias consequat</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*<!-- BLOG POSTS -->*/}
					{/*<!-- POST 1 -->*/}
					<div className="card card-horizontal">
						<div className="card-body">
							<div className="card-horizontal-left">
								<div className="card-category">
									<a href="category.html">Food &amp; Drink</a>
								</div>
								<h3 className="card-title"><a href="single-post.html">Best and Worst Summer Foods</a></h3>
								<div className="card-excerpt">
									<p>Admodum comprehenderit id non cillum anim de appellat, ubi tamen singulis sempiternum,
										occaecat sunt appellat appellat ex varias an in quem laborum an si ita quid multos irure
										do excepteur culpa quamquam. Nam aliqua iudicem aliquip o sunt cupidatat...</p>
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
					{/*<!-- POST 2 -->*/}
					<div className="card card-horizontal">
						<div className="card-body">
							<div className="card-horizontal-left">
								<div className="card-category">
									<a href="category.html">Lifestyle</a>
								</div>
								<h3 className="card-title"><a href="single-post.html">What Is Perfect Training?</a></h3>
								<div className="card-excerpt">
									<p>Non in familiaritatem, esse mentitum deserunt. Sunt excepteur quamquam. Enim ullamco
										consequat, nisi se singulis non fugiat. Nulla laboris tractavissent, tempor hic illum
										vidisse. Tempor qui noster incurreret, officia in ingeniis ubi in sunt arbitror ubi...
									</p>
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
					{/*<!-- POST 3 -->*/}
					<div className="card card-horizontal">
						<div className="card-body">
							<div className="card-horizontal-left">
								<div className="card-category">
									<a href="category.html">Technology</a>
								</div>
								<h3 className="card-title"><a href="single-post.html">The Best Cameras For Beginners</a></h3>
								<div className="card-excerpt">
									<p>Pariatur ab enim ita in ne philosophari, cillum incididunt voluptate hic aut quorum
										vidisse distinguantur, quis possumus cohaerescant, mentitum eruditionem iis aliquip, ubi
										quem possumus quamquam ea o eiusmod graviterque culpa expetendis ingeniis...</p>
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
					{/*<!-- POST 4 -->*/}
					<div className="card card-horizontal">
						<div className="card-body">
							<div className="card-horizontal-left">
								<div className="card-category">
									<a href="category.html">TV &amp; Movies</a>
								</div>
								<h3 className="card-title"><a href="single-post.html">The 20 Creepiest Clowns in Movies</a></h3>
								<div className="card-excerpt">
									<p>Iudicem fidelissimae non appellat aut senserit tamen ad senserit adipisicing, commodo ubi
										expetendis quo vidisse illum mentitum e ea fore summis dolore quibusdam. Anim litteris
										nam imitarentur, offendit culpa cillum ingeniis enim, sed varias senserit nostrud
										vidisse...</p>
								</div>
								<div className="card-horizontal-meta">
									<div className="eskimo-author-meta">
										By <a className="author-meta" href="author.html">Egemenerd</a>
									</div>
									<div className="eskimo-date-meta">
										<a href="single-post.html">May 20, 2018</a>
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
									<a href="category.html">Travel</a>
								</div>
								<h3 className="card-title"><a href="single-post.html">The Best Places To Travel</a></h3>
								<div className="card-excerpt">
									<p>Quo aute efflorescere, ita fugiat aliquip. Lorem ad litteris, anim cupidatat ut
										concursionibus e quae proident hic litteris, de multos adipisicing. Fugiat laboris nam
										exercitation, arbitror an senserit ubi aut quis lorem id cernantur, ubi minim iudicem
										nostrud. Minim fidelissimae...</p>
								</div>
								<div className="card-horizontal-meta">
									<div className="eskimo-author-meta">
										By <a className="author-meta" href="author.html">Egemenerd</a>
									</div>
									<div className="eskimo-date-meta">
										<a href="single-post.html">May 20, 2018</a>
									</div>
									<div className="eskimo-reading-meta">4 min read</div>
								</div>
							</div>
							<div className="card-horizontal-right" data-img="images/1024x680.png">
								<a className="card-featured-img" href="single-post.html"></a>
							</div>
						</div>
					</div>
					{/*<!-- VIEW ALL BUTTON -->*/}
					<div className="eskimo-view-more">
						<a className="btn btn-default" href="blog.html">VIEW ALL POSTS</a>
					</div>

					{/*<!-- DIVIDER -->*/}
					<hr className="section-divider" />

					{/*<!-- CAROUSEL -->*/}
					<div className="eskimo-widget-title">
						<h3 className="eskimo-carousel-title"><span>POPULAR POSTS</span></h3>
					</div>

					<div className="eskimo-carousel-container">
						<div className="eskimo-carousel-view-more">
							<a href="blog.html">VIEW ALL</a>
						</div>

						<div id="eskimo-post-carousel" className="eskimo-carousel">
							{/*<!-- CAROUSEL ITEM 1 -->*/}
							<div>
								<div className="card-masonry card-small">
									<div className="card">
										<a href="single-post.html">
											<img className="card-vertical-img" src="images/900x600.png"
												alt="Ketchup Flavored Ice Cream!" />
										</a>
										<div className="card-border">
											<div className="card-body">
												<div className="card-category">
													<a href="single-post.html">May 28, 2018</a>
												</div>
												<h5 className="card-title"><a href="single-post.html">Ketchup Flavored Ice
													Cream!</a></h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/*<!-- CAROUSEL ITEM 2 -->*/}
							<div>
								<div className="card-masonry card-small">
									<div className="card">
										<a href="single-post.html">
											<img className="card-vertical-img" src="images/900x600.png"
												alt="Hair You've Always Dreamed Of" />
										</a>
										<div className="card-border">
											<div className="card-body">
												<div className="card-category">
													<a href="single-post.html">May 27, 2018</a>
												</div>
												<h5 className="card-title"><a href="single-post.html">Hair You've Always Dreamed
													Of</a></h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/*<!-- CAROUSEL ITEM 3 -->*/}
							<div>
								<div className="card-masonry card-small">
									<div className="card">
										<a href="single-post.html">
											<img className="card-vertical-img" src="images/900x600.png"
												alt="15 Of The World's Best Carnivals" />
										</a>
										<div className="card-border">
											<div className="card-body">
												<div className="card-category">
													<a href="single-post.html">May 25, 2018</a>
												</div>
												<h5 className="card-title"><a href="single-post.html">15 Of The World's Best
													Carnivals</a></h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/*<!-- CAROUSEL ITEM 4 -->*/}
							<div>
								<div className="card-masonry card-small">
									<div className="card">
										<a href="single-post.html">
											<img className="card-vertical-img" src="images/900x600.png"
												alt="5 Ways to a Healthy Lifestyle" />
										</a>
										<div className="card-border">
											<div className="card-body">
												<div className="card-category">
													<a href="single-post.html">May 25, 2018</a>
												</div>
												<h5 className="card-title"><a href="single-post.html">5 Ways to a Healthy
													Lifestyle</a></h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/*<!-- CAROUSEL ITEM 5 -->*/}
							<div>
								<div className="card-masonry card-small">
									<div className="card">
										<a href="single-post.html">
											<img className="card-vertical-img" src="images/900x600.png"
												alt="Best Breakfast In The World" />
										</a>
										<div className="card-border">
											<div className="card-body">
												<div className="card-category">
													<a href="single-post.html">May 23, 2018</a>
												</div>
												<h5 className="card-title"><a href="single-post.html">Best Breakfast In The
													World</a></h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			{/*<!-- FOOTER -->*/}
			<footer id="eskimo-footer">
				<div className="container">
					<div className="row eskimo-footer-wrapper">
						{/*<!-- FOOTER WIDGET 1 -->*/}
						<div className="col-12 col-lg-6 mb-4 mb-lg-0">
							<h5 className="eskimo-title-with-border"><span>About Me</span></h5>
							<p>Trusted by thousands of customers, my unique themes and plugins help you make beautiful
								responsive web sites with ease.</p>
							<p><a href="about.html" className="btn btn-default">Read More</a></p>
						</div>
						{/*<!-- FOOTER WIDGET 2 -->*/}
						<div className="col-12 col-lg-6">
							<h5 className="eskimo-title-with-border"><span>Newsletter</span></h5>
							<form method="post" action="index.html">
								<label>Subscribe to our mailing list!</label>
								<div className="input-group">
									<input type="email" className="form-control" name="EMAIL" placeholder="Your email address"
										required />
									<div className="input-group-append">
										<input type="submit" value="Sign up" className="btn btn-default" />
									</div>
								</div>
							</form>
						</div>
					</div>
					{/*<!-- CREDITS -->*/}
					<div className="eskimo-footer-credits">
						<p>
							Made with love by <a href="https://themeforest.net/user/egemenerd" target="_blank">Egemenerd</a>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default SiteWrapper;