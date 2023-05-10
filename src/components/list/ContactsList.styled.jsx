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
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-direction: column;
  ${mq({
    width: ['300px', '130px', '200px', '200px'],
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

export const ContactsList = styled.ul`
  max-width: auto;
  padding-left: 0px;
  margin: 0;
  background-color: #fff;
  margin-top: 20px;
  margin-left: 0px;
  display: flex;
`;
export const ContactsItem = styled.li`
  max-width: 100%;
  height: auto;
  list-style: none;
  border-bottom: 1px solid #f5f5f5;
  &:last-child {
    border-bottom: none;
  }
`;
export const ContactsTitle = styled.h2`
  height: auto;
  background-color: #025260;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  // margin: 10px;
  width: auto;
`;
export const ContactsText = styled.p`
  // -webkit-hyphens: auto;
  // -ms-hyphens: auto;
  // hyphens: auto;
  flex-wrap: wrap;
  height: auto;
  font-size: 20px;
  font-weight: 500;
  // margin: 10px;
  background-color: #fff;
  color: #025260;
  ${mq({
    fontSize: ['10px', '130px', '200px', '200px'],
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

export const ContactsSliderContainer = styled.div`
  width: 100%;
`;
