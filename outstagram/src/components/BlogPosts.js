import React from 'react';

function BlogPosts() {
	return (
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
	);
}

export default BlogPosts;