// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './EventsStyle';
import EventsCards from '../Cards/EventsCards.jsx';
import { events } from '../../data/constants';

// Import React Slick and styles
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Slick styles
import 'slick-carousel/slick/slick-theme.css'; // Slick theme styles

const Events = ({ openModal, setOpenModal }) => {
  // Configuration for React Slick
  const sliderSettings = {
    dots: true, // Show dots (pagination)
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 slides at a time on large screens
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Autoplay functionality
    autoplaySpeed: 3000, // Autoplay speed
    arrows: true, // Show next/prev arrows
    responsive: [
      {
        breakpoint: 960, // Breakpoint for medium screens
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 640, // Breakpoint for small screens
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
        },
      },
    ],
  };

  return (
      <Container id="events">
        <Wrapper>
          <Title>Past Events</Title>
          <Desc>{/* Add a description here if needed */}</Desc>

          <CardContainer>
            <Slider {...sliderSettings}>
              {events.map((event) => (
                  <div key={event.id}>
                    <EventsCards project={event} setOpenModal={setOpenModal} />
                  </div>
              ))}
            </Slider>
          </CardContainer>
        </Wrapper>
      </Container>
  );
};

export default Events;
