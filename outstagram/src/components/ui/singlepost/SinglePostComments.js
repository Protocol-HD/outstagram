import React from 'react';

function SinglePostComments({ comments }) {
	return (
		<div id="eskimo-comments-wrapper">
			<div id="eskimo_comments_block" className="eskimo_comments_block">
				<h3 className="eskimo-title-with-border">
					<span>Comments</span>
				</h3>
				<div className="eskimo_commentlist">
					{
						comments.map(comment => (
							<div key={comment.id} className="eskimo_comment_wrapper">
								<div className="eskimo_comments">
									<div className="eskimo_comment">
										<div className="eskimo_comment_inner">
											<div className="eskimo_comment_left">
												<img alt='' src='./images/person-fill.svg' />
											</div>
											<div className="eskimo_comment_right">
												<div className="eskimo_comment_right_inner ">
													<cite className="eskimo_fn">
														<span>{comment.author}</span>
													</cite>
													<div className="eskimo_comment_links">
														<i className="fa fa-clock-o"></i>
														{comment.updated} -
														<span >Reply</span>
													</div>
													<div className="eskimo_comment_text">
														<p>{comment.text}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
}

export default SinglePostComments;