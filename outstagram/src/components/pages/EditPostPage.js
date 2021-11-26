import React, { useEffect, useState } from 'react';
import PageTitle from '../PageTitle';
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function EditPostPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const postUrl = `http://localhost:5001/post/${id}`;
	const catUrl = "http://localhost:5000/categories";
	const snsUrl = "http://localhost:5000/sns";

	const [post, setPost] = useState([]);
	const [categories, setCategories] = useState([]);
	const [snsList, setSnsList] = useState([]);

	const [image, setImage] = useState([]);
	const [imageKey, setImageKey] = useState(1);
	const [tag, setTag] = useState([]);
	const [tagKey, setTagKey] = useState(1);
	const [category, setCategory] = useState([]);
	const [categoryKey, setCategoryKey] = useState(1);

	useEffect(() => {
		axios.get(postUrl).then(Response => {
			setPost(Response.data);
			setTag(Response.data.tags);
			setTagKey(Response.data.tags.length + 1);
			setCategory(Response.data.categoryId);
			setCategoryKey(Response.data.categoryId.length + 1);
			setImage(Response.data.images);
			setImageKey(Response.data.images.length + 1);

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

	const addImage = (e) => {
		if (e.target.value[e.target.value.length - 1] === ",") {
			setImage([
				...image,
				{
					id: imageKey,
					image: e.target.value.substr(0, e.target.value.length - 1)
				}
			]);
			e.target.value = "";
			setImageKey(imageKey + 1);
		}
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
					id: categoryKey,
					name: e.target.value
				}
			]);
			e.target.value = "Select Category";
			setCategoryKey(categoryKey + 1);
		}
	}

	const delImage = (id) => {
		setImage(image.filter(item => item.id !== id));
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
			images: image,
			tags: tag,
			categoryId: category
		}).then(navigate("/"));
	}

	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title="Edit Post" />
			<div className="testBox  text-center">
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

					<div className="eskimo-meta-tags mt-0">
						{
							category.map(item => (
								<div className="badge badge-primary" key={item.id}>
									{item.name}
									<span className="delButton pointer" onClick={() => delCategory(item.id)}>x</span>
								</div>
							))
						}
					</div>
					<select className="form-select mb-2 p-2 col-12" name="categoryId" onChange={addCategory}>
						<option defaultValue>Select Category</option>
						{
							categories.map(category => (<option key={category.id} value={category.name}>
								{category.name}
							</option>))
						}
					</select>

					<figcaption className="blockquote-footer">
						<cite title="Source Title">쉼표( , )로 구분</cite>
					</figcaption>
					<div className="eskimo-meta-tags mt-0">
						{
							tag.map(item => (
								<div className="badge badge-default" key={item.id}>
									#{item.tagName}
									<span className="delButton pointer" onClick={() => delTag(item.id)}>x</span>
								</div>
							))
						}
					</div>
					<div className="input-group mb-2  inputBox">
						<input type="text" className="form-control" placeholder="Tags" onChange={addTag} name="tags" />
					</div>

					<div className="input-group mb-2  inputBox">
						<input type="text" className="form-control" placeholder="Title Image" onChange={handleSubmit} value={post.titleImage} name="titleImage" required />
					</div>

					<figcaption className="blockquote-footer">
						<cite title="Source Title">쉼표( , )로 구분</cite>
					</figcaption>
					<div className="eskimo-meta-tags mt-0">
						{
							image.map(item => (
								<div className="badge badge-success" key={item.id}>
									@{item.image}
									<span className="delButton pointer" onClick={() => delImage(item.id)}>x</span>
								</div>
							))
						}
					</div>
					<div className="input-group mb-2  inputBox">
						<input type="text" className="form-control" placeholder="Image1s" onChange={addImage} name="images" />
					</div>

					<div className="input-group mb-2  inputBox">
						<textarea type="text" className="form-control text-box" placeholder="Text" onChange={handleSubmit} value={post.text} name="text" required />
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