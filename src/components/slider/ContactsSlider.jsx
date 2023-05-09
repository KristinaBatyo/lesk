
import { useState } from 'react';
import { SliderContainer, SliderItem } from './Slider.styled';
import React from 'react';

export const SliderTrack = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex === children.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <SliderContainer>
      <button onClick={handlePrevious}>Previous</button>
      <ul>
        {React.Children.map(children, (child, index) => {
          if (index === currentIndex) {
            return <SliderItem>{child}</SliderItem>;
          }
        })}
      </ul>
      <button onClick={handleNext}>Next</button>
    </SliderContainer>
  );
};