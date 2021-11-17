import React from 'react';

function Footer() {
	return (
		<footer id="eskimo-footer">
			<div className="container">
				<div className="row eskimo-footer-wrapper">
					{/*<!-- FOOTER WIDGET 1 -->*/}
					<div className="col-12 col-lg-6 mb-4 mb-lg-0">
						<h5 className="eskimo-title-with-border"><span>About Me</span></h5>
						<p>Trusted by thousands of customers, my unique themes and plugins help you make beautiful responsive web sites with ease.</p>
						<p><a href="about.html" className="btn btn-default">Read More</a></p>
					</div>
					{/*<!-- FOOTER WIDGET 2 -->*/}
					<div className="col-12 col-lg-6">
						<h5 className="eskimo-title-with-border"><span>Newsletter</span></h5>
						<form method="post" action="index.html">
							<label>Subscribe to our mailing list!</label>
							<div className="input-group">
								<input type="email" className="form-control" name="EMAIL" placeholder="Your email address" required />
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
	);
}

export default Footer;