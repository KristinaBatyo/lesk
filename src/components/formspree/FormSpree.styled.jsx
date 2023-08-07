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

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  ${mq({
    minHeight: ['auto', '', '', '700px'],
  })};
`;
export const Container = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mq({
    width: ['100%', '']
  })};
`;

export const ImgContainer = styled.ul`
display: flex;
padding: 0;
`;

export const Item = styled.li`
  list-style: none;
  border-radius: 50%;
  margin: 0;
`;
export const ItemTop = styled.li`
  list-style: none;
  border-radius: 50%;
  padding-top: 50px;
  margin: 0;
`;

export const Img = styled.img`
  height: auto;
  border-radius: 50%;
  ${mq({
    width: ['90px', '100px', '200px'],
  })};
`;
export const ImgSecond = styled.img`
  width: 150px;
  height: auto;
  border-radius: 50%;
  ${mq({
    width: ['90px', '100px', '200px'],
  })};
`;

export const Title = styled.h2`
  color: #e6ba95;
  font-weight: 500;
  line-height: 1.14;
  text-align: center;
  ${mq({
    fontSize: ['18px', '18px', '40px', '50px'],
  })};
`;

export const Paragraph = styled.p`
  color: white;
  background-color: #e6ba95;
  font-weight: 500;
  line-height: 1.14;
  width: 90%;
  margin: 0;
  margin-bottom: 10px;
  ${mq({
    fontSize: ['14px', '14px', '18px', '20px'],
  })};
`;
    
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${mq({
    marginTop: ['', '', '', '40px'],
  })};
`;


export const Button = styled.button`
  margin-bottom: 5px;
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
  ${mq({
    marginTop: ['5px', '5px', '5px', '20px'],
    width: ['60px', '100px', '100px', '200px'],
    height: ['24px', '', '24px', '40px'],
  })};
`;

export const ContactMessage = styled.p`
  margin-top: 130px;
  color: #025260;
  font-weight: 500;
  font-size: 34px;
  line-height: 1.14;
  font-family: Raleway, sans-serif;
  text-align: center;
  text-shadow: 1px 1px 1px white, 2px 2px 1px #e6ba95;
`;