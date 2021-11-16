import React from 'react';

function BlogPosts() {
	return (
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
	);
}

export default BlogPosts;