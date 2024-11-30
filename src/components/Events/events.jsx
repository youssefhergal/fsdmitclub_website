// eslint-disable-next-line no-unused-vars
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { events } from "../../data/constants";
import EventsCards from "../Cards/EventsCards.jsx";
import { Container, Desc, Title, Wrapper } from "./EventsStyle";
// Import React Slick and styles
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; // Slick styles
import { Navigation, Pagination } from "swiper/modules";
const Events = ({ openModal, setOpenModal }) => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		responsive: [
			{
				breakpoint: 1060, // Breakpoint for medium screens
				settings: {
					slidesToShow: 2, // Show 2 slides on medium screens
					centreMode: true,
				},
			},
			{
				breakpoint: 750, // Breakpoint for small screens
				settings: {
					slidesToShow: 1, // Show 1 slide on small screens
					centerMode: true, // Enable center mode
					centerPadding: "0",
				},
			},
		],
	};

	return (
		<>
			<Container id='events'>
				<Wrapper>
					<Title>Past Events</Title>
					<Desc>{/* Add a description here if needed */}</Desc>

					<Swiper
						spaceBetween={20}
						slidesPerView={3}
						centeredSlides={true}
						modules={[Navigation, Pagination]} // Include necessary modules
						loop={true} // Enable infinite loop
						navigation // Enable navigation arrows
						pagination={{ clickable: true }}
						onSlideChange={() => console.log("slide change")}>
						{events.map((event, index) => (
							<SwiperSlide
								key={index + Math.random()}
								style={{
									width: "300px !important",
								}}>
								<EventsCards
									project={event}
									setOpenModal={setOpenModal}
								/>
							</SwiperSlide>
						))}
					</Swiper>
					{/* <CardContainer>
						<Slider {...sliderSettings}>
							{events.map((event) => (
								<div key={event.id}>
									<EventsCards
										project={event}
										setOpenModal={setOpenModal}
									/>
								</div>
							))}
						</Slider>
					</CardContainer> */}
				</Wrapper>
				<br />
			</Container>
		</>
	);
};

export default Events;
