import React, { useEffect, useState } from 'react';
import SliderItem from './widgets/slider/SliderItem';

function Slider() {

	const [sliders, setSliders] = useState([])

	useEffect(()=>{
		fetch("http://localhost:3005/Sliders")
		.then(res=>{
			return res.json()
		})
		.then(data=>{
			setSliders(data)
			console.log(data)
		})

		
	},[])
	return (
		<div className="eskimo-carousel-container eskimo-bg-loader">
			<div id="eskimo-post-slider" className="eskimo-slider">
				{
					sliders.map(item=>(
						<SliderItem 
							key = {item.id}
							postId = {item.postId}
						/>
					))
				}
			</div>
		</div>
	);
}

export default Slider;