import React from 'react';

function SlidePanel() {
	return (
		<div id="eskimo-panels">
			<aside id="eskimo-panel" className="eskimo-panel">
				<div className="eskimo-panel-inner">
					{/*<!-- CLOSE SLIDE PANEL BUTTON -->*/}
					<a href="#" className="eskimo-panel-close"><i className="fa fa-times"></i></a>
					{/*<!-- AUTHOR BOX -->*/}
					<div className="eskimo-author-box eskimo-widget">
						<div className="eskimo-author-img">
							<img src="images/300x300.png" alt="JOHN DOE" />
						</div>
						<h3><span>JOHN DOE</span></h3>
						<p className="eskimo-author-subtitle">WEB DESIGNER &amp; DEVELOPER</p>
						<p className="eskimo-author-description">I'm a Web Developer and Designer with a strong passion for UX/UI design. I have experience building websites, web applications, and brand assets. Contact me if you have any questions!</p>
						<div className="eskimo-author-box-btn">
							<a className="btn btn-default" href="about.html">CONTACT ME</a>
						</div>
					</div>
					{/*<!-- RECENT POSTS -->*/}
					<div className="eskimo-recent-entries eskimo-widget">
						<h5 className="eskimo-title-with-border"><span>Recent Posts</span></h5>
						<ul>
							<li>
								<a href="single-post.html">Ketchup Flavored Ice Cream!</a>
								<span className="post-date">May 28, 2018</span>
							</li>
							<li>
								<a href="single-post.html">Hair You've Always Dreamed Of</a>
								<span className="post-date">May 27, 2018</span>
							</li>
							<li>
								<a href="single-post.html">15 Of The World's Best Carnivals</a>
								<span className="post-date">May 25, 2018</span>
							</li>
							<li>
								<a href="single-post.html">5 Ways to a Healthy Lifestyle</a>
								<span className="post-date">May 25, 2018</span>
							</li>
							<li>
								<a href="single-post.html">Best Breakfast In The World</a>
								<span className="post-date">May 23, 2018</span>
							</li>
						</ul>
					</div>
					{/*<!-- CATEGORIES -->*/}
					<div className="eskimo-categories eskimo-widget">
						<h5 className="eskimo-title-with-border"><span>Categories</span></h5>
						<ul>
							<li>
								<a href="category.html" title="The best restaurants, cafes, bars and shops in town.">Food &amp; Drink</a> <span className="badge badge-pill badge-default">5</span>
							</li>
							<li>
								<a href="category.html" title="An up-to-date, personal urban guide.">Lifestyle</a> <span className="badge badge-pill badge-default">5</span>
							</li>
							<li>
								<a href="category.html" title="Latest technology news and updates.">Technology</a> <span className="badge badge-pill badge-default">4</span>
							</li>
							<li>
								<a href="category.html" title="Travel advice, information and inspiration.">Travel</a> <span className="badge badge-pill badge-default">5</span>
							</li>
							<li>
								<a href="category.html" title="The latest news about movies and TV shows.">TV &amp; Movies</a> <span className="badge badge-pill badge-default">4</span>
							</li>
						</ul>
					</div>
					{/*<!-- TAGS -->*/}
					<div className="eskimo-widget">
						<h5 className="eskimo-title-with-border"><span>Tags</span></h5>
						<div className="eskimo-tag-cloud">
							<a href="category.html">aute<span>7</span></a>
							<a href="category.html">enim<span>7</span></a>
							<a href="category.html">commodo<span>7</span></a>
							<a href="category.html">voluptatibus<span>7</span></a>
							<a href="category.html">culpa<span>7</span></a>
							<a href="category.html">offendit<span>7</span></a>
							<a href="category.html">magna<span>7</span></a>
							<a href="category.html">quorum<span>7</span></a>
							<a href="category.html">mandaremus<span>7</span></a>
							<a href="category.html">ingeniis<span>7</span></a>
							<a href="category.html">tempor<span>7</span></a>
							<a href="category.html">summis<span>7</span></a>
							<a href="category.html">consequat<span>6</span></a>
							<a href="category.html">iudicem<span>6</span></a>
							<a href="category.html">expetendis<span>6</span></a>
							<a href="category.html">deserunt<span>6</span></a>
						</div>
					</div>
				</div>
			</aside>
		</div>
	);
}

export default SlidePanel;