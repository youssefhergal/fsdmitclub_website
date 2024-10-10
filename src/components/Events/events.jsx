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
          centreMode:true,
        },
      },
      {
        breakpoint: 750, // Breakpoint for small screens
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          centerMode: true, // Enable center mode
          centerPadding: '0',
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
