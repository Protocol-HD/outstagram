import React, { useEffect, useState } from 'react';
import SliderOutstagram from "react-slick";
import SliderItem from './widgets/slider/SliderItem';


function Slider() {

	const [sliders, setSliders] = useState([]);

	const settings = {
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToScroll: 1,
		adaptiveHeight: true,
		slidesToShow: 1,
		arrows: true,
		dots: false,
		fade: true
	};


	useEffect(() => {


		fetch("http://localhost:3005/Sliders")
			.then(res => {
				return res.json()
			})
			.then(data => {
				setSliders(data);
			});


	}, [])

	
	return (
		<div className="eskimo-carousel-container">
			<SliderOutstagram id="eskimo-post-slider" className="eskimo-slider" {...settings} style={{ opacity : 1 }}>
				{
					sliders.map(item => (
						<SliderItem
							key={item.id}
							postId={item.postId}
						/>
					))
				}
			</SliderOutstagram>
		</div>
	);
}

export default Slider;