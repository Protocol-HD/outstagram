import React, { useRef, useState } from 'react';
import PageTitle from '../PageTitle';
import style from './SignUp.module.css'

function SignUp() {
	const refId = useRef(null);
	const refPw = useRef(null);
	const refPw2 = useRef(null);
	const [idErrMsg, setIdErrMsg] = useState("");
	const [pwErrMsg, setPwErrMsg] = useState("");
	const [idOkMsg, setIdOkMsg] = useState("");
	const [pwOkMsg, setPwOkMsg] = useState("");
	const [isIdOk, setIsIdOk] = useState(false);
	const [isPwOk, setIsPwOk] = useState(false);
	const [isIdCheck, setIsIdCheck] = useState(false);

	const idRegex = /^[a-zA-Z0-9]{4,20}$/;
	const pwRegex = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*#?&]).*$/;

	const checkIdErr = () => {
		setIsIdCheck(false);
		setIsIdOk(false);
		
		if (refId.current.value.length >= 4 && refId.current.value.length <= 20) {
			if (idRegex.test(refId.current.value)) {
				setIdErrMsg("");
				setIdOkMsg("OK");
				setIsIdOk(true);
			} else {
				setIdOkMsg("");
				setIdErrMsg("사용 불가능한 문자가 포함되었습니다.")
			}

		} else {
			setIdOkMsg("");
			setIdErrMsg("아이디가 4이상 20자리 이하가 아닙니다.")
		}
	}

	const checkPwErr = () => {
		setIsPwOk(false);
		if (refPw.current.value.length >= 6 && refPw.current.value.length <= 20) {
			if (pwRegex.test(refPw.current.value)) {
				if (refPw.current.value == refPw2.current.value) {
					setPwErrMsg("");
					setPwOkMsg("비밀번호가 일치합니다.");
					setIsPwOk(true);
				} else {
					setPwOkMsg("");
					setPwErrMsg("비밀번호가 서로 틀립니다.");
				}
			} else {
				setPwOkMsg("");
				setPwErrMsg("영어, 숫자, 특수문자 각각 1개 이상 포함 되지 않았거나 사용 불가능한 문자가 포함되었습니다.");
			}
		} else {
			setPwOkMsg("");
			setPwErrMsg("비밀번호가 6이상 20자리 이하가 아닙니다.");
		}
	}

	const checkId = () => {
		if (idRegex.test(refId.current.value)) {
			fetch(`http://localhost:3005/users?userId=${refId.current.value}`)
				.then(res => {
					return res.json()
				})
				.then(data => {
					if (data.length == 0) {
						setIdErrMsg("");
						setIdOkMsg("사용 가능합니다.");
						setIsIdCheck(true);
					} else {
						setIdErrMsg("");
						setIdOkMsg("아이디가 중복되었습니다.");
						setIsIdCheck(false);
					}
				})
		} else {
			setIdOkMsg("");
			setIdErrMsg("아이디가 잘못되었습니다.")
			setIsIdCheck(false);
		}
	}

	const handelSubmit = (event) => {
		event.preventDefault();
		if (isIdCheck) {
			if (isIdOk && isPwOk) {
				if (refId.current.value.length > 3 && refPw.current.value.length > 7) {
					fetch("http://localhost:3005/users", {
						method: "POST",
						headers: { "content-Type": "application/json" },
						body: JSON.stringify({
							userId: refId.current.value,
							userPw: refPw.current.value
						})
					})
						.then(
							res => {
								if (res.ok) {
									alert("등록에 성공했습니다.")
									refId.current.value = "";
									refPw.current.value = "";
									refPw2.current.value = "";
									setIdOkMsg("");
									setPwOkMsg("");
								}
							}
						);
				}
			} else {
				alert("아이디랑 패스워드를 확인하세요.")
			}
		} else {
			alert("아이디 중복체크를 하세요.")
		}
	}
	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title="Sign Up" />
			<div className={style.signUpBox}>
				<form onSubmit={handelSubmit}>
					<figure class="text-center">
						<blockquote class="blockquote">
							<p>ID</p>
						</blockquote>
						<figcaption class="blockquote-footer">
							<cite title="Source Title">아이디는 4자리 이상 20자리 이하이여야 하며 영어, 숫자만 입력</cite>
							<div>
								<span className={style.signUpErr}>{idErrMsg}</span>
								<span className={style.signUpOk}>{idOkMsg}</span>
							</div>
						</figcaption>
					</figure>
					<div class="input-group mb-3">
						<input type="text" class="form-control" placeholder="아이디를 4자리 이상 입력하세요." aria-label="User ID" aria-describedby="button-addon2" ref={refId} onChange={checkIdErr} />
						<button class="btn btn-primary" type="button" id="button-addon2" onClick={checkId}>중복 체크</button>
					</div>
					<figure class="text-center">
						<blockquote class="blockquote">
							<p>Password</p>
						</blockquote>
						<figcaption class="blockquote-footer">
							<cite title="Source Title">비밀번호는 6자리 이상 20자리 이하이어야 하며 영어, 숫자, 특수문자 각각 1개 이상 포함</cite>
							<div>
								<span className={style.signUpErr}>{pwErrMsg}</span>
								<span className={style.signUpOk}>{pwOkMsg}</span>
							</div>
						</figcaption>
					</figure>
					<div class="input-group mb-1 inputBox">
						<input type="password" class="form-control" placeholder="비밀번호를 8자리 이상 입력하세요." aria-label="User Password" aria-describedby="button-addon2" ref={refPw} onChange={checkPwErr} />
					</div>
					<div class="input-group mb-3 inputBox">
						<input type="password" class="form-control" placeholder="비밀번호 확인" aria-label="User Password" aria-describedby="button-addon2" ref={refPw2} onChange={checkPwErr} />
					</div>
					<button type="submit" className="btn btn-primary">가입하기</button>
				</form>
			</div>
		</div>
	);
}

export default SignUp;