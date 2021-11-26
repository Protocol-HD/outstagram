import React from 'react';
import SignIn from '../ui/SignIn';
import SignUp from '../ui/SignUp';
import PageTitle from '../PageTitle';

function Sign() {
	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title="Sign in / Sign up" />
			<div className="text-center signBox d-flex align-items-center justify-content-center flex-wrap">
				<SignIn />
				<SignUp />
			</div>
		</div >
	);
}

export default Sign;