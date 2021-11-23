import React, { useEffect, useState } from 'react';
import PageTitle from '../PageTitle';

function AddPostPage() {

	const [categories, setCategories] = useState([]);
	const [snsList, setSnsList] = useState([]);
	const [tag, setTag] = useState([]);
	const [category, setCategory] = useState([]);
	const [newPost, setNewPost] = useState({
		author: "",
		postTitle: "",
		categoryId: [],
		tags: [],
		titleImage: "",
		images: "",
		text: "",
		snsList: "",
		created: "",
		updated: "",
		like: false
	});

	const handleSubmit = (e) => {
		const { name, value } = e.target;
		setNewPost({
			...newPost,
			[name]: value
		});
	}

	const addTag = (e) => {
		if (e.target.value[e.target.value.length - 1] == ",") {
			setTag([
				...tag,
				{
					id: tag.length + 1,
					tagName: e.target.value.substr(0, e.target.value.length - 1)
				}
			]);
			e.target.value = "";
		}
	}

	const addCategory = (e) => {
		if (!category.find(item => (item.name == e.target.value)) && e.target.value !="Select Category") {
			setCategory([
				...category,
				{
					id: category.length + 1,
					name: e.target.value
				}
			]);
		e.target.value = "Select Category";
		}
	}

	const delTag = (id) => {
		setTag(tag.filter(item => item.id != id));
	}

	const delCategory = (id) => {
		setCategory(category.filter(item => item.id != id));
	}

	const onSubmit = (event) => {
		event.preventDefault();

		if (newPost.author != "" && newPost.postTitle != "" && newPost.titleImage != "" && newPost.text != "") {
			const date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]
			const time = new Date().toTimeString().split(" ")[0];
			fetch("http://localhost:3005/Post", {
				method: "POST",
				headers: { "content-Type": "application/json" },
				body: JSON.stringify({
					...newPost,
					created: date + ' ' + time,
					updated: date + ' ' + time,
					tags: tag,
					categoryId: category
				})
			})
				.then(
					res => {
						if (res.ok) {
							alert("등록에 성공했습니다.")
						}
					}
				);
		}
	}

	useEffect(() => {
		fetch("http://localhost:3005/categories")
			.then(
				res => {
					return res.json();
				}
			)
			.then(
				data => {
					setCategories(data)
				}
			);
		fetch("http://localhost:3005/sns")
			.then(
				res => {
					return res.json();
				}
			)
			.then(
				data => {
					setSnsList(data)
				}
			);
	}, []);
	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title="Add Post" />
			<div className="testBox">
				<figure class="text-center">
					<blockquote class="blockquote">
						<p>Post 추가</p>
					</blockquote>
					<figcaption class="blockquote-footer">
						필수 작성란) <cite title="Source Title">작성자, 제목, 메인사진, 글내용</cite>
					</figcaption>
				</figure>

				<form onSubmit={onSubmit}>
					<div className="input-group mb-2 inputBox">
						<input type="text" className="form-control" placeholder="Author" aria-label="Author" aria-describedby="button-addon2" onChange={handleSubmit} name="author" />
					</div>

					<div className="input-group mb-2 inputBox">
						<input type="text" className="form-control" placeholder="Post Title" aria-label="Post Title" aria-describedby="button-addon2" onChange={handleSubmit} name="postTitle" />
					</div>

					{
						category.map(item => (
							<div class="badge bg-primary text-wrap align-self-center innerList" key={item.id}>
								{item.name}
								<span className="delButton pointer" onClick={() => delCategory(item.id)}>x</span>
							</div>
						))
					}
					<select className="form-select mb-2 p-2 col-12" aria-label="Default select example" onChange={handleSubmit} name="categoryId" onChange={addCategory}>
						<option defaultValue>Select Category</option>
						{
							categories.map(category => (<option key={category.id} value={category.name}>
								{category.name}
							</option>))
						}
					</select>

					<figcaption class="blockquote-footer">
						<cite title="Source Title">태그는 쉼표( , )로 구분</cite>
					</figcaption>
					{
						tag.map(item => (
							<div class="badge bg-primary text-wrap align-self-center innerList" key={item.id}>
								{item.tagName}
								<span className="delButton pointer" onClick={() => delTag(item.id)}>x</span>
							</div>
						))
					}
					<div className="input-group mb-2 inputBox">
						<input type="text" className="form-control" placeholder="Tags" aria-label="Tags" aria-describedby="button-addon2" onChange={handleSubmit, addTag} name="tags" />
					</div>

					<div className="input-group mb-2 inputBox">
						<input type="text" className="form-control" placeholder="Title Image" aria-label="Title Image" aria-describedby="button-addon2" onChange={handleSubmit} name="titleImage" />
					</div>

					<div className="input-group mb-2 inputBox">
						<input type="text" className="form-control" placeholder="Image1s" aria-label="Images" aria-describedby="button-addon2" onChange={handleSubmit} name="images" />
					</div>

					<div className="input-group mb-2 inputBox">
						<textarea type="text" className="form-control" placeholder="Text" aria-label="Text" aria-describedby="button-addon2" onChange={handleSubmit} name="text" />
					</div>

					<select className="form-select mb-2 p-2 col-12" aria-label="Default select example" onChange={handleSubmit} name="snsList">
						<option defaultValue>Select SNS</option>
						{
							snsList.map(sns => (<option key={sns.id} value={sns.id}>{sns.name}</option>))
						}
					</select>

					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
	);
}

export default AddPostPage;