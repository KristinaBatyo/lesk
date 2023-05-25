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
  background-color: #fafafa;
  ${mq({
    maxWidth: ['100%'],
  })};
`;
export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  margin-top: 20px;

  ${mq({
    maxWidth: ['100%'],
  })};
`;

export const Line = styled.div`
  display: flex;
`;

export const ContactsItem = styled.li`
  list-style: none;
  border-bottom: 1px solid #f5f5f5;
  &:last-child {
    border-bottom: none;
  }

`;
export const ContactsTitle = styled.h2`
  // height: auto;
  background-color: #025260;
  color: #fff;
  padding: 5px;
  margin-bottom: 0.5rem;
  ${mq({
    fontSize: ['15px', '15px', '15px', '20px'],
  })}
`;
export const ContactsText = styled.p`
  margin: 0;
  color: #e6ba95;
  width: 100%;

  ${mq({
    fontSize: ['12px', '15px', '20px', '20px'],
  })};
`;

export const ContactsListStyled = styled.p`
padding: 0px;
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