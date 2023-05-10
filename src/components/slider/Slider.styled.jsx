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
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

export const Handlers = styled.div`
  max-width: 100%;
  display: flex;
`;

export const SliderItem = styled.div`
  max-width: 100%;
  flex-shrink: 0;
  margin: 10px;
  margin-top: 0;
  transition: all 0.3s ease;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 700;
  margin: 1rem;
  min-width: 30px;
  min-height: 20px;
  background-color: #025260;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${mq({
    width: ['',],
    height: ['100%'],
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

export const ContactsList = styled.ul`
  padding-left: 0px;
  margin: 0;
  ${mq({
    maxWidth: ['200px', '350px', '650px', '1100px'],
  })}
`;