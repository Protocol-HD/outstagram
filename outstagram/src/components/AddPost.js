import React, { useRef } from 'react';

function AddPost() {

	const refAuthor = useRef(null);
	const refPostTitle = useRef(null);
	const refCategoryId = useRef(null);
	const refTags = useRef(null);
	const refTitleImage = useRef(null);
	const refImages = useRef(null);
	const refText = useRef(null);
	const refSnsList = useRef(null);


	const handelSubmit = (event) => {
		event.preventDefault();

		if (refAuthor.current.value !== "" && refPostTitle.current.value !== "" && refTitleImage.current.value !== "" && refText.current.value !== "") {
			fetch("http://localhost:3005/Post", {
				method: "POST",
				headers: { "content-Type": "application/json" },
				body: JSON.stringify({
					author: refAuthor.current.value,
					postTitle: refPostTitle.current.value,
					categoryId: refCategoryId.current.value,
					tags: refTags.current.value,
					titleImage: refTitleImage.current.value,
					images: refImages.current.value,
					text: refText.current.value,
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
							refTags.current.value = "";
							refTitleImage.current.value = "";
							refImages.current.value = "";
							refText.current.value = "";
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
					<input type="text" className="form-control" placeholder="Tags" aria-label="Tags" aria-describedby="button-addon2" ref={refTags} />
				</div>
				<div className="input-group mb-2">
					<input type="text" className="form-control" placeholder="Title Image" aria-label="Title Image" aria-describedby="button-addon2" ref={refTitleImage} />
				</div>
				<div className="input-group mb-2">
					<input type="text" className="form-control" placeholder="Image1s" aria-label="Images" aria-describedby="button-addon2" ref={refImages} />
				</div>
				<div className="input-group mb-2">
					<input type="text" className="form-control" placeholder="Text" aria-label="Text" aria-describedby="button-addon2" ref={refText} />
				</div>
				<div className="input-group mb-5">
					<input type="text" className="form-control" placeholder="SNS" aria-label="SNS" aria-describedby="button-addon2" ref={refSnsList} />
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</>
	);
}

export default AddPost;