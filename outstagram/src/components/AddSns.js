import React, { useRef } from 'react';

function AddSns() {
	const refSns = useRef(null);

	const handelSubmit = (event) => {
		event.preventDefault();

		if (refSns.current.value !== "") {
			fetch("http://localhost:3005/sns", {
				method: "POST",
				headers: { "content-Type": "application/json" },
				body: JSON.stringify({
					name: refSns.current.value
				})
			})
				.then(
					res => {
						if (res.ok) {
							alert("등록에 성공했습니다.")
							refSns.current.value = "";
						}
					}
				);
		}
	}
	return (
		<>
			<figure class="text-center">
				<blockquote class="blockquote">
					<p>SNS 추가</p>
				</blockquote>
				<figcaption class="blockquote-footer">
					ex) <cite title="Source Title">Facebook</cite>
				</figcaption>
			</figure>

			<form onSubmit={handelSubmit}>
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" ref={refSns} />
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</>
	);
}

export default AddSns;