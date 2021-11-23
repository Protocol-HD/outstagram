import React, { useRef } from 'react';

function AddCategories() {
	const refCategories = useRef(null);

	const handelSubmit = (event) => {
		event.preventDefault();

		if (refCategories.current.value !== "") {
			fetch("http://localhost:3005/categories", {
				method: "POST",
				headers: { "content-Type": "application/json" },
				body: JSON.stringify({
					name: refCategories.current.value
				})
			})
				.then(
					res => {
						if (res.ok) {
							alert("등록에 성공했습니다.")
							refCategories.current.value = "";
						}
					}
				);
		}
	}
	return (
		<>
			<figure class="text-center">
				<blockquote class="blockquote">
					<p>Categories 추가</p>
				</blockquote>
				<figcaption class="blockquote-footer">
					ex) <cite title="Source Title">Camping</cite>
				</figcaption>
			</figure>

			<form onSubmit={handelSubmit}>
				<div className="input-group mb-3 inputBox">
					<input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" ref={refCategories} />
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</>
	);
}

export default AddCategories;