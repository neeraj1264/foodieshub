import React, { useState } from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <Carousel
      index={activeIndex}
      onChange={(index) => handleSlideChange(index)}
      animation="slide"
      timeout={2000}
      cycleNavigation
      autoPlay={true}  // Set autoPlay to true for automatic scrolling
      stopAutoPlayOnHover={false}  // Allow auto-scrolling even when the carousel is hovered
    >
      {carouselItems.map((item, index) => (
        <Box key={index}>
          <img src={item.imageSrc} alt={item.altText} style={{ width: '100%', objectFit: 'cover' , padding: '1rem' , borderRadius: '2rem' }} />
        </Box>
      ))}
    </Carousel>
  );
};

const carouselItems = [
  {
    imageSrc: 'pizza.jpeg',
    altText: 'Slide 1',
  },
  {
    imageSrc: 'pizza.jpeg',
    altText: 'Slide 2',
  },
  {
    imageSrc: 'pizza.jpeg',
    altText: 'Slide 3',
  },
];

export default CustomCarousel;
