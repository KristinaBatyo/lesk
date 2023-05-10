import { useState } from 'react';
import {
  SliderContainer,
  SliderItem,
  Buttom,
  Container,
} from './Slider.styled';
import React from 'react';
import { ReactComponent as ButtonLeft } from '../image/circleleft.svg';
import { ReactComponent as ButtonRight } from '../image/circleright.svg';

import { useSwipeable } from 'react-swipeable';

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

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
  });

  return (
    <div {...handlers}>
      <Container>
        <Buttom onClick={handlePrevious}>
          <ButtonLeft fill="white" width="20px" />
        </Buttom>
        <SliderContainer>
          <ul>
            {React.Children.map(children, (child, index) => {
              if (index === currentIndex) {
                return <SliderItem>{child}</SliderItem>;
              }
            })}
          </ul>
        </SliderContainer>
        <Buttom onClick={handleNext}>
          <ButtonRight fill="white" width="20px" />
        </Buttom>
      </Container>
    </div>
  );
};
