import React, { useState } from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Category from '../categories/Category';
const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
    <Carousel
      index={activeIndex}
      onChange={(index) => handleSlideChange(index)}
      animation="slide"
      timeout={2000}
      cycleNavigation
      height="297px"
      autoPlay={true}  // Set autoPlay to true for automatic scrolling
      stopAutoPlayOnHover={false}  // Allow auto-scrolling even when the carousel is hovered
    >
      {carouselItems.map((item, index) => (
        <Box key={index}>
          <img src={item.imageSrc} alt={item.altText} style={{ width: '100%', objectFit: 'cover' , padding: '1rem' , borderRadius: '2rem' }} />
        </Box>
      ))}
    </Carousel>
    <Category/>
    </>
  );
};

const carouselItems = [
  {
    imageSrc: 's-img-2.jpg',
    altText: 'Slide 1',
  },
  {
    imageSrc: 's-img-2.jpg',
    altText: 'Slide 2',
  },
  {
    imageSrc: 's-img-2.jpg',
    altText: 'Slide 3',
  },
];

export default CustomCarousel;
