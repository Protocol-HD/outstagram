import React from 'react';

function FooterWidget2() {
	return (
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
	);
}

export default FooterWidget2;