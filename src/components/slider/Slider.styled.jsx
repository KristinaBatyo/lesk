import styled from '@emotion/styled';
import facepaint from 'facepaint';

const mq = facepaint(
  [
    '@media(max-width: 479px)',
    '@media(min-width: 480px)',
    '@media(min-width: 768px)',
    '@media(min-width: 1200px)',
  ],
  { literal: true }
);

export const SliderContainer = styled.div`
  width: 300px;
  position: relative;
`;
export const Container = styled.div`
  width: 300px;
  justify-content: center;
  align-items: center;
  border: 3px solid #ccc;
  display: flex;
  ${mq({
    width: ['300px', '130px', '200px', '200px'],
  })};
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
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;

export const Buttom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 15px;
  font-weight: 700;
  margin: 20px;
  width: 100px;
  height: 30px;
  margin-left: 20px;
  background-color: #025260;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #f5f5f5;
    transform: scale(1.03);
    outline: none;
    color: #025260;
  }
`;

export const ButtomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
