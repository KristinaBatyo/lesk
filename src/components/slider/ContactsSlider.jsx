import { useState } from 'react';
import {
  SliderContainer,
  SliderItem,
  Button,
  Container,
  LeftButtonContainer,
  RightButtonContainer,
  Handlers,
  ContactsList,
} from './Slider.styled';
import React from 'react';
import { ReactComponent as ButtonLeft } from '../image/circleleft.svg';
import { ReactComponent as ButtonRight } from '../image/circleright.svg';

import { useSwipeable } from 'react-swipeable';

export const SliderTrack = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenCount = React.Children.count(children);

  const handlePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(childrenCount - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === childrenCount - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
  });

  return (
    <Handlers {...handlers}>
      <LeftButtonContainer>
        <Button onClick={handlePrevious}>
          <ButtonLeft fill="white" width="20px" />
        </Button>
      </LeftButtonContainer>
      <Container>
        <SliderContainer>
          <ContactsList>
            {React.Children.map(children, (child, index) => {
              if (index === currentIndex) {
                return <SliderItem>{child}</SliderItem>;
              }
            })}
          </ContactsList>
        </SliderContainer>
      </Container>
      <RightButtonContainer>
        <Button onClick={handleNext}>
          <ButtonRight fill="white" width="20px" />
        </Button>
      </RightButtonContainer>
    </Handlers>
  );
};