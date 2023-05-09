import styled from '@emotion/styled';

export const SliderContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const SliderTrack = styled.div`
  display: flex;
  width: ${props => props.trackWidth}px;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${props => props.trackOffset}px);
`;

export const SliderItem = styled.div`
  width: 100%;
  flex-shrink: 0;
`;
