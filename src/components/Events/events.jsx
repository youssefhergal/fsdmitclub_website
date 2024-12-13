// eslint-disable-next-line no-unused-vars
import React from "react";
import { events } from "../../data/constants";
import EventsCards from "../Cards/EventsCards.jsx";
import { Container, Title, Wrapper } from "./EventsStyle";
// Import React Slick and styles
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Events = ({ openModal, setOpenModal }) => {
	return (
		<>
			<Container id='events'>
				<Wrapper>
					<Title>Past Events</Title>
					<Carousel
						useKeyboardArrows
						autoPlay
						showArrows
						width={"100vw"}
						emulateTouch
						infiniteLoop
						showThumbs={false}
						centerMode={window.innerWidth > 800}
						stopOnHover
						centerSlidePercentage={28}>
						{events.map((event, index) => (
							<EventsCards
								key={event.id}
								project={event}
								setOpenModal={setOpenModal}
							/>
						))}
					</Carousel>
				</Wrapper>
				<br />
			</Container>
		</>
	);
};

export default Events;
