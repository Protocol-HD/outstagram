import React, { useEffect, useState } from 'react';
import PageTitle from '../widgets/PageTitle';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function AddPostPage() {
	const postUrl = "http://localhost:5001/post";
	const catUrl = "http://localhost:5000/categories";
	const snsUrl = "http://localhost:5000/sns";
	const navigate = useNavigate();

	const [categories, setCategories] = useState([]);
	const [snsList, setSnsList] = useState([]);

	const [image, setImage] = useState([]);
	const [imageKey, setImageKey] = useState(1);
	const [tag, setTag] = useState([]);
	const [tagKey, setTagKey] = useState(1);
	const [category, setCategory] = useState([]);
	const [categoryKey, setCategoryKey] = useState(1);

	const [newPost, setNewPost] = useState({
		author: "",
		postTitle: "",
		categoryId: [],
		tags: [],
		titleImage: "",
		images: [],
		text: "",
		snsList: "",
		created: "",
		updated: "",
		like: false,
		likeCount: 0
	});

	useEffect(() => {
		axios.get(catUrl).then(Response => setCategories(Response.data));
		axios.get(snsUrl).then(Response => setSnsList(Response.data));
	}, [catUrl, snsUrl]);

	const handleSubmit = (e) => {
		const { name, value } = e.target;
		setNewPost({
			...newPost,
			[name]: value
		});
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
		axios.post(postUrl, {
			...newPost,
			created: date + ' ' + time,
			updated: date + ' ' + time,
			images: image,
			tags: tag,
			categoryId: category
		}).then(navigate("/"));
	}
	return (
		<div id="eskimo-site-wrapper">
			<PageTitle title="Add Post" />
			<div className="inputBox text-center">
				<figure>
					<blockquote className="blockquote text-center">
						<p>Post 추가</p>
					</blockquote>
					<figcaption className="blockquote-footer">
						필수 작성란) 작성자, 제목, 메인사진, 글내용
					</figcaption>
				</figure>

				<form onSubmit={onSubmit}>
					<div className="input-group mb-2 inputBox">
						<input type="text" className="form-control" placeholder="Author" onChange={handleSubmit} name="author" required />
					</div>

					<div className="input-group mb-2 inputBox">
						<input type="text" className="form-control" placeholder="Post Title" onChange={handleSubmit} name="postTitle" required />
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
						쉼표( , )로 구분
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
					<div className="input-group mb-2 inputBox">
						<input type="text" className="form-control" placeholder="Tags" onChange={addTag} name="tags" />
					</div>

					<div className="input-group mb-2 inputBox">
						<input type="text" className="form-control" placeholder="Title Image" onChange={handleSubmit} name="titleImage" required />
					</div>

					<figcaption className="blockquote-footer">
						쉼표( , )로 구분
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
					<div className="input-group mb-2 inputBox">
						<input type="text" className="form-control" placeholder="Images" onChange={addImage} name="images" />
					</div>

					<div className="input-group mb-2 inputBox">
						<textarea type="text" className="form-control text-box" placeholder="Text" onChange={handleSubmit} name="text" required />
					</div>

					<select className="form-select mb-2 p-2 col-12" onChange={handleSubmit} name="snsList">
						<option defaultValue>Select SNS</option>
						{
							snsList.map(sns => (<option key={sns.id} value={sns.id}>{sns.name}</option>))
						}
					</select>
					<button type="submit" className="btn btn-primary">글 올리기</button>
				</form>
			</div>
		</div>
	);
}

export default AddPostPage;