import React from 'react';

function SinglePostContents({ post }) {
	return (
		<>
			<div className="clearfix"></div>
			<div className="eskimo-featured-img">
				<img src={`./images/${post.titleImage}`} alt="" />
			</div>
			<div className="eskimo-page-content">
				{post.text}
				<div className="container">
					<div className="row">
						{
							post.images && post.images.map(image => (
								<img
									key={image.id}
									className=" col-12 col-md-6 col-xl-4 img-fluid overviewImg"
									src={`./images/${image.image}`}
									alt=""
								/>
							))
						}
					</div>
				</div>
				<p>{post.text}</p>
				<div className="clearfix"></div>
				<div className="eskimo-meta-tags">
					{
						post.tags && post.tags.map(tag => (<span key={tag.id} className="badge badge-default">#{tag.tagName}</span>))
					}
				</div>

				<div className="eskimo-post-nav-wrapper">
					<div className="eskimo-post-nav-left-row">
						<div className="eskimo-post-nav-table">
							<span className="eskimo-post-nav" >
								<i className="fa fa-chevron-left"></i>
							</span>
							<div className="eskimo-post-nav-link">
								<span className="eskimo-post-nav" >Best Breakfast In The World</span>
							</div>
						</div>
					</div>

					<div className="eskimo-post-nav-right-row">
						<div className="eskimo-post-nav-table">
							<div className="eskimo-post-nav-link">
								<span className="eskimo-post-nav" >15 Of The World&#8217;s Best Carnivals</span>
							</div>
							<span className="eskimo-post-nav" >
								<i className="fa fa-chevron-right"></i></span>
						</div>
					</div>
				</div>
			</div>
			<div className="clearfix"></div>
		</>
	);
}

export default SinglePostContents;