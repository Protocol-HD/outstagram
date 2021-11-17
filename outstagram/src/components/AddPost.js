import React, { useRef, useState } from 'react';

function AddPost() {

	const refAuthor = useRef(null);
	const refPostTitle = useRef(null);
	const refCategoryId = useRef(null);
	const refTags1 = useRef(null);
	// const refTags2 = useRef(null);
	// const refTags3 = useRef(null);
	// const refTags4 = useRef(null);
	const refTitleImage = useRef(null);
	const refImages1 = useRef(null);
	const refImages2 = useRef(null);
	const refImages3 = useRef(null);
	const refTexts1 = useRef(null);
	const refTexts2 = useRef(null);
	const refTexts3 = useRef(null);
	const refTexts4 = useRef(null);
	const refSnsList = useRef(null);


	const handelSubmit = (event) => {
		event.preventDefault();

		// refAuthor.current.value !== "" && refPostTitle.current.value !== "" && refTitleImage.current.value !== "" && refTexts1.current.value !== ""

		if (refTags1.current.value !== "") {
			const tags = refTags1.current.value.split("#" || " #");
			console.log(tags);
			tags.map((id, tag) => {
				console.log(id, tag);
				return (
					{
					}
				);
			});

			fetch("http://localhost:3005/Post", {
				method: "POST",
				headers: { "content-Type": "application/json" },
				body: JSON.stringify({
					author: refAuthor.current.value,
					postTitle: refPostTitle.current.value,
					categoryId: refCategoryId.current.value,
					// tags: [
					// 	refTags1.current.value,
					// 	refTags2.current.value,
					// 	refTags3.current.value,
					// 	refTags4.current.value
					// ],
					titleImage: refTitleImage.current.value,
					// images: [
					// 	refImages1.current.value,
					// 	refImages2.current.value,
					// 	refImages3.current.value
					// ],
					// texts: [
					// 	refTexts1.current.value,
					// 	refTexts2.current.value,
					// 	refTexts3.current.value,
					// 	refTexts4.current.value
					// ],
					snsList: refSnsList.current.value,
					created: Date(),
					updated: Date()
				})
			})
				.then(
					res => {
						if (res.ok) {
							alert("등록에 성공했습니다.")
							refAuthor.current.value = "";
							refPostTitle.current.value = "";
							refCategoryId.current.value = "";
							refTags1.current.value = "";
							// refTags2.current.value = "";
							// refTags3.current.value = "";
							// refTags4.current.value = "";
							refTitleImage.current.value = "";
							refImages1.current.value = "";
							refImages2.current.value = "";
							refImages3.current.value = "";
							refTexts1.current.value = "";
							refTexts2.current.value = "";
							refTexts3.current.value = "";
							refTexts4.current.value = "";
							refSnsList.current.value = "";
						}
					}
				);
		}
	}
	return (
		<>
			<figure class="text-center">
				<blockquote class="blockquote">
					<p>Post 추가</p>
				</blockquote>
				<figcaption class="blockquote-footer">
					필수 작성란) <cite title="Source Title">작성자, 제목, 메인사진, 글내용</cite>
				</figcaption>
			</figure>

			<form onSubmit={handelSubmit}>
				<div className="input-group mb-2">
					<input type="text" className="form-control" placeholder="Author" aria-label="Author" aria-describedby="button-addon2" ref={refAuthor} />
				</div>
				<div className="input-group mb-2">
					<input type="text" className="form-control" placeholder="Post Title" aria-label="Post Title" aria-describedby="button-addon2" ref={refPostTitle} />
				</div>
				<div className="input-group mb-2">
					<input type="text" className="form-control" placeholder="Category Id" aria-label="Category Id" aria-describedby="button-addon2" ref={refCategoryId} />
				</div>
				<div className="input-group mb-2">
					<input type="text" className="form-control" placeholder="Tags1" aria-label="Tags" aria-describedby="button-addon2" ref={refTags1} />
					{/* <input type="text" className="form-control" placeholder="Tags2" aria-label="Tags2" aria-describedby="button-addon2" ref={refTags2} />
					<input type="text" className="form-control" placeholder="Tags3" aria-label="Tags3" aria-describedby="button-addon2" ref={refTags3} />
					<input type="text" className="form-control" placeholder="Tags4" aria-label="Tags4" aria-describedby="button-addon2" ref={refTags4} /> */}
				</div>
				<div className="input-group mb-2">
					<input type="text" className="form-control" placeholder="Title Image" aria-label="Title Image" aria-describedby="button-addon2" ref={refTitleImage} />
				</div>
				<div className="input-group mb-2">
					<input type="text" className="form-control" placeholder="Image1s" aria-label="Images" aria-describedby="button-addon2" ref={refImages1} />
					<input type="text" className="form-control" placeholder="Images2" aria-label="Images2" aria-describedby="button-addon2" ref={refImages2} />
					<input type="text" className="form-control" placeholder="Images3" aria-label="Images3" aria-describedby="button-addon2" ref={refImages3} />
				</div>
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Texts1" aria-label="Texts" aria-describedby="button-addon2" ref={refTexts1} />
				</div>
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Texts2" aria-label="Texts2" aria-describedby="button-addon2" ref={refTexts2} />
				</div>
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Texts3" aria-label="Texts3" aria-describedby="button-addon2" ref={refTexts3} />
				</div>
				<div className="input-group mb-2">
					<input type="text" className="form-control" placeholder="Texts4" aria-label="Texts4" aria-describedby="button-addon2" ref={refTexts4} />
				</div>
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Sns List" aria-label="Sns List" aria-describedby="button-addon2" ref={refSnsList} />
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</>
	);
}

export default AddPost;