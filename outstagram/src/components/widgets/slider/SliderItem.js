import React, { useEffect, useState } from 'react';

function SliderItem({postId}) {

    const [post, setPost] = useState([])
    const [categoryName, setCategoryName] = useState("")
    const [slideImageUrl, setSlideImageUrl] = useState("")

    useEffect(()=>{
        fetch(`http://localhost:3005/post/${postId}`)
		.then(res=>{
			return res.json()
		})
		.then(data=>{
			setPost(data)
			console.log(data.categoryId)
            setSlideImageUrl(`./images/${data.titleImage}`)
            callCategoryName(data.categoryId)
		})
    },[])
    
    const callCategoryName = (id) => {
        fetch(`http://localhost:3005/categories/${id}`)
		.then(res=>{
			return res.json()
		})
		.then(data=>{
			setCategoryName(data.name)
			console.log(data.name)
		})
    }

    return ( 
        <div>
			<a className="eskimo-slider-img" href="single-post.html"></a>
			<ul className="eskimo-slider-image-meta eskimo-image-meta-post">
                <li><a href="single-post.html"><span className="badge badge-default">{post.created}</span></a></li>
                <li><a href="category.html"><span className="badge badge-default">{categoryName}</span></a></li>
            </ul>
            <div className="clearfix"></div>
            <img src={slideImageUrl} alt={post.postTitle} />
            <div className="eskimo-slider-desc">
                <div className="eskimo-slider-desc-inner">
                    <h2 className="card-title">{post.postTitle}</h2>
                    <p>{post.postTitle}</p>
                </div>
            </div>
        </div>
				
     );
}

export default SliderItem;