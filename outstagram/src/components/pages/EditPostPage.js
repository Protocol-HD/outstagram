import React, { useEffect, useState } from 'react';
import PageTitle from '../PageTitle';
import { useParams } from "react-router";

function EditPostPage() {
	const { id } = useParams();
	const [post, setPost] = useState([]);
	const [categories, setCategories] = useState([]);
	const [snsList, setSnsList] = useState([]);
	const [tag, setTag] = useState([]);
	const [category, setCategory] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3005/post/${id}`)
			.then(res => {
				return (
					res.json()
				);
			})
			.then(data => {
				setPost(data);
			})
	}, []);
	useEffect(() => {
		setTag(post.tags)
		setCategory(post.categoryId)
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
	}, [post]);



	const handleSubmit = (e) => {
		const { name, value } = e.target
		setPost({
			...post,
			[name]: value
		})
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
		if (!category.find(item => (item.name == e.target.value)) && e.target.value != "Select Category") {
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

		if (post.author != "") {
			const date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]
			const time = new Date().toTimeString().split(" ")[0];
			fetch(`http://localhost:3005/post/${id}`, {
				method: "PUT",
				headers: { "content-Type": "application/json" },
				body: JSON.stringify({
					...post,
					updated: date + ' ' + time,
					tags: tag,
					categoryId: category
				})
			})
				.then(
					res => {
						if (res.ok) {
							alert("수정에 성공했습니다.")
						}
					}
				);
		}
	}

	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title="Edit Post" />
			<div className="testBox">
				<figure class="text-center">
					<blockquote class="blockquote">
						<p>Post 수정</p>
					</blockquote>
					<figcaption class="blockquote-footer">
						필수 작성란) <cite title="Source Title">작성자, 제목, 메인사진, 글내용</cite>
					</figcaption>
				</figure>

				<form onSubmit={onSubmit}>
					<div className="input-group mb-2  inputBox">
						<input type="text" className="form-control" placeholder="Author" aria-label="Author" aria-describedby="button-addon2" onChange={handleSubmit} value={post.author} name="author" />
					</div>

					<div className="input-group mb-2  inputBox">
						<input type="text" className="form-control" placeholder="Post Title" aria-label="Post Title" aria-describedby="button-addon2" onChange={handleSubmit} value={post.postTitle} name="postTitle" />
					</div>

					{
						category && category.map(item => (
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
						tag && tag.map(item => (
							<div class="badge bg-primary text-wrap align-self-center innerList" key={item.id}>
								{item.tagName}
								<span className="delButton pointer" onClick={() => delTag(item.id)}>x</span>
							</div>
						))
					}
					<div className="input-group mb-2  inputBox">
						<input type="text" className="form-control" placeholder="Tags" aria-label="Tags" aria-describedby="button-addon2" onChange={handleSubmit, addTag} name="tags" />
					</div>

					<div className="input-group mb-2  inputBox">
						<input type="text" className="form-control" placeholder="Title Image" aria-label="Title Image" aria-describedby="button-addon2" onChange={handleSubmit} value={post.titleImage} name="titleImage" />
					</div>

					<div className="input-group mb-2  inputBox">
						<input type="text" className="form-control" placeholder="Image1s" aria-label="Images" aria-describedby="button-addon2" onChange={handleSubmit} value={post.images} name="images" />
					</div>

					<div className="input-group mb-2  inputBox">
						<textarea type="text" className="form-control" placeholder="Text" aria-label="Text" aria-describedby="button-addon2" onChange={handleSubmit} value={post.text} name="text" />
					</div>

					<select className="form-select mb-2 p-2 col-12" aria-label="Default select example" onChange={handleSubmit} value={post.snsList} name="snsList">
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

export default EditPostPage;