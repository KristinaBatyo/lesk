import styled from '@emotion/styled';
import Slider from 'react-slick';
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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: #fafafa;
  
  ${mq({
    maxWidth: ['100%'],
  })};
`;
export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: #fafafa;
  margin-top: 20px;

  ${mq({
    maxWidth: ['100%'],
  })};
`;

export const Line = styled.div`
  display: flex;
`;

export const ReviewsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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


export const ContactsItem = styled.li`
  max-width: 100%;
  height: auto;
  padding-left: 0px;
  list-style: none;
  overflow: hidden;
  border-bottom: 1px solid #f5f5f5;
  &:last-child {
    border-bottom: none;
  }

`;
export const ContactsTitle = styled.h2`
  height: auto;
  background-color: #025260;
  font-family: Raleway, sans-serif;
  color: #fff;
  padding: 5px;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  ${mq({
    fontSize: ['15px', '15px', '15px', '20px'],
  })}
`;
export const ContactsText = styled.p`
  flex-wrap: wrap;
  height: auto;
  font-size: 20px;
  font-weight: 500;
  max-width: 100%;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  background-color: #fff;
  color: #e6ba95;
  font-family: Raleway, sans-serif;
  ${mq({
    fontSize: ['12px', '15px', '20px', '20px'],
  })};
`;
export const DeleteButton = styled.button`
  width: 100px;
  padding: 5px;
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

export const ContactsSlider = styled(Slider)`
  .slick-slide {
    margin: 0px 10px;
  }
`;



export const CeníkItem = styled.li`
  max-width: 100%;
  height: auto;
  padding-left: 0px;
  list-style: none;
  border-bottom: 1px solid #f5f5f5;
  &:last-child {
    border-bottom: none;
  }
  color: #025260;
  margin-top: 15px;
  ${mq({
    fontSize: ['14px', '15px', '20px', '20px'],
  })};
`;