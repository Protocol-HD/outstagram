import axios from 'axios';
import React, { useRef, useState } from 'react';

function SignUp() {
	const idRegex = /^[a-zA-Z0-9]{4,20}$/;
	const pwRegex = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*#?&]).*$/;
	const url = `http://localhost:5003/users`;
	const userId = useRef();
	const userPw = useRef();
	const userPw2 = useRef();
	const [errMsg, setErrMsg] = useState("");

	const checkId = () => {
		if (!idRegex.test(userId.current.value)) {
			setErrMsg("ID는 4자이상 20자이하이어야 하며 영문자와 숫자만 가능합니다.");
			return false;
		} else {
			setErrMsg("");
			return true;
		}
	}

	const checkPw = () => {
		if (!pwRegex.test(userPw.current.value) && !pwRegex.test(userPw2.current.value)) {
			setErrMsg("Password는 4자이상 20자이하이어야 1개 이상의 영문자, 숫자, 특수문자를 포함해야 합니다.");
			return false;
		} else {
			setErrMsg("");
			return true;
		}
	}

	const addUser = (e) => {
		e.preventDefault();
		axios.get(url + `?userId=${userId.current.value}`)
			.then(Response => {
				if (checkId() && checkPw() && Response.data.length === 0 && userPw.current.value === userPw2.current.value) {
					const date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]
					const time = new Date().toTimeString().split(" ")[0];
					axios.post(url, {
						userId: userId.current.value,
						userPw: userPw.current.value,
						created: date + ' ' + time
					});
					setErrMsg("");
					userId.current.value = null;
					userPw.current.value = null;
					userPw2.current.value = null;
					alert("가입되었습니다!");
				} else if (!checkId()) {
					setErrMsg("ID는 4자이상 20자이하이어야 하며 영문자와 숫자만 가능합니다.");
				} else if (!checkPw()) {
					setErrMsg("Password는 4자이상 20자이하이어야 1개 이상의 영문자, 숫자, 특수문자를 포함해야 합니다.");
				} else if (Response.data.length !== 0) {
					setErrMsg("이미 존재하는 ID입니다.");
				} else {
					setErrMsg("Password 일치하는지 확인해주세요.");
				}

			});
	}
	return (
		<div className="signForm">
			<form onSubmit={addUser}>
				<h1 className="h3 mb-3 fw-normal">Sign Up</h1>

				<div className="form-floating">
					<input type="text" className="form-control mb-3" placeholder="ID" ref={userId} onChange={checkId} required />
				</div>
				<div className="form-floating">
					<input type="password" className="form-control mb-3" placeholder="Password" ref={userPw} onChange={checkPw} required />
				</div>
				<div className="form-floating">
					<input type="password" className="form-control" placeholder="Confirm Password" ref={userPw2} onChange={checkPw} required />
				</div>
				<div className="mt-2 signErrMsg">{errMsg}</div>
				<button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign up</button>
				<p className="mt-5 mb-3 text-muted">가입하기</p>
			</form>
		</div>
	);
}

export default SignUp;