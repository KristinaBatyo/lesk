import styled from '@emotion/styled';
import facepaint from 'facepaint';

const mq = facepaint(
  [
    '@media(max-width: 479px)',
    '@media(min-width: 480px) and (max-width: 767px)',
    '@media(min-width: 768px) and (max-width: 1199px)',
    '@media(min-width: 1200px)',
  ],
  { literal: true }
);


export const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  overflow: hidden;
`;

export const SliderItem = styled.div`
  width: 90%;
  flex-shrink: 0;
  margin: 10px;
  transition: all 0.3s ease;
  ${mq({
    maxWidth: ['300px', '400px', '500px', '600px'],
  })}
`;

export const Buttom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 700;
  margin: 1rem;
  min-width: 100px;
  min-height: 30px;
  background-color: #025260;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${mq({
    width: ['70px', '90px', '120px', '150px'],
    height: ['25px', '30px', '35px', '40px'],
    margin: ['0.5rem', '0.75rem', '1rem', '1.25rem'],
  })}
`;




export const LeftButtonContainer = styled.div`
  position: absolute;
  left: 0;
`;

export const RightButtonContainer = styled.div`
  position: absolute;
  right: 0;
`;