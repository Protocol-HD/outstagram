import React, { useEffect, useState } from 'react';
import PageTitle from '../PageTitle';
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function EditPostPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const postUrl = `http://localhost:3005/Post/${id}`;
	const catUrl = "http://localhost:3005/categories";
	const snsUrl = "http://localhost:3005/sns";
	const [post, setPost] = useState([]);
	const [categories, setCategories] = useState([]);
	const [snsList, setSnsList] = useState([]);
	const [tag, setTag] = useState([]);
	const [tagKey, setTagKey] = useState(1);
	const [category, setCategory] = useState([]);

	useEffect(() => {
		axios.get(postUrl).then(Response => {
			setPost(Response.data);
			setTag(Response.data.tags);
			setCategory(Response.data.categoryId);
			setTagKey(Response.data.tags.length + 1);
		});
		axios.get(catUrl).then(Response => setCategories(Response.data));
		axios.get(snsUrl).then(Response => setSnsList(Response.data));
	}, [postUrl, catUrl, snsUrl]);

	const handleSubmit = (e) => {
		const { name, value } = e.target
		setPost({
			...post,
			[name]: value
		})
	}

	const addTag = (e) => {
		if (e.target.value[e.target.value.length - 1] === ",") {
			setTag([
				...tag,
				{
					id: tagKey,
					tagName: e.target.value.substr(0, e.target.value.length - 1)
				}
			]);
			e.target.value = "";
			setTagKey(tagKey + 1);
		}
	}

	const addCategory = (e) => {
		if (!category.find(item => (item.name === e.target.value)) && e.target.value !== "Select Category") {
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
		setTag(tag.filter(item => item.id !== id));
	}

	const delCategory = (id) => {
		setCategory(category.filter(item => item.id !== id));
	}

	const onSubmit = (event) => {
		event.preventDefault();
		const date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]
		const time = new Date().toTimeString().split(" ")[0];
		axios.put(postUrl, {
			...post,
			updated: date + ' ' + time,
			tags: tag,
			categoryId: category
		}).then(navigate("/"));
	}

	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title="Edit Post" />
			<div className="testBox">
				<figure className="text-center">
					<blockquote className="blockquote">
						<p>Post 수정</p>
					</blockquote>
					<figcaption className="blockquote-footer">
						필수 작성란) <cite title="Source Title">작성자, 제목, 메인사진, 글내용</cite>
					</figcaption>
				</figure>

				<form onSubmit={onSubmit}>
					<div className="input-group mb-2  inputBox">
						<input type="text" className="form-control" placeholder="Author" onChange={handleSubmit} value={post.author} name="author" required />
					</div>

					<div className="input-group mb-2  inputBox">
						<input type="text" className="form-control" placeholder="Post Title" onChange={handleSubmit} value={post.postTitle} name="postTitle" required />
					</div>

					{
						category.map(item => (
							<div className="badge bg-primary text-wrap align-self-center innerList" key={item.id}>
								{item.name}
								<span className="delButton pointer" onClick={() => delCategory(item.id)}>x</span>
							</div>
						))
					}
					<select className="form-select mb-2 p-2 col-12" name="categoryId" onChange={addCategory}>
						<option defaultValue>Select Category</option>
						{
							categories.map(category => (<option key={category.id} value={category.name}>
								{category.name}
							</option>))
						}
					</select>

					<figcaption className="blockquote-footer">
						<cite title="Source Title">태그는 쉼표( , )로 구분</cite>
					</figcaption>
					{
						tag.map(item => (
							<div className="badge bg-primary text-wrap align-self-center innerList" key={item.id}>
								{item.tagName}
								<span className="delButton pointer" onClick={() => delTag(item.id)}>x</span>
							</div>
						))
					}
					<div className="input-group mb-2  inputBox">
						<input type="text" className="form-control" placeholder="Tags" onChange={addTag} name="tags" />
					</div>

					<div className="input-group mb-2  inputBox">
						<input type="text" className="form-control" placeholder="Title Image" onChange={handleSubmit} value={post.titleImage} name="titleImage" required />
					</div>

					<div className="input-group mb-2  inputBox">
						<input type="text" className="form-control" placeholder="Image1s" onChange={handleSubmit} value={post.images} name="images" />
					</div>

					<div className="input-group mb-2  inputBox">
						<textarea type="text" className="form-control" placeholder="Text" onChange={handleSubmit} value={post.text} name="text" required />
					</div>

					<select className="form-select mb-2 p-2 col-12" onChange={handleSubmit} value={post.snsList} name="snsList">
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