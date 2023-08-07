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

export const ImgList = styled.img`
width: 20px;
 height: 20px;
`;
export const ImgContainer = styled.div`
  display: block;
  width: auto;
  margin-right: auto;
  width: 100%;
  height: 100%
  overflow: hidden;
        ${mq({
          position: ['static', 'static', 'relative', 'relative'],
        })};
`;



export const Img = styled.img`
  bottom: 0;
  display: block;
  ${mq({
    width: ['100%', '100%', '100%', '100%'],
    height: ['auto', 'auto', 'auto', 'auto'],
    position: ['static', 'static', 'absolute', 'absolute'],
  })};
`;


export const Title = styled.h1`
  background: linear-gradient(to right,  #e0e0e0 , #006778);
  position: static;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  color: #006778;
  ${mq({
    width: ['', '', 'inherit', 'inherit'],
  })};
`;
export const List = styled.ul`
  position: static;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  padding: 0px;
  ${mq({
    width: ['100%', '100%', '350px', '400px'],
  })};
`;

export const Link = styled.a`
  text-decoration: none;
  background-color: #006778;
  color: white;
  transition: color 250ms linear, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    color: white;
  }
`;

export const Item = styled.li`
  list-style: none;
  ${mq({
    fontSize: ['', '', '20px'],
    lineHeight: ['', '', '42px'],
    
  })};
`;

export const HeroContainer = styled.div`
  width: 100%;
  background: linear-gradient(to right, #006778, #e0e0e0 100%, #006778);
  ${mq({
    display: ['block', 'block', 'flex', 'flex'],
    marginTop: ['100px', '120px'],
    top: ['', '350px', '200px', '200px'],
  })};
`;

export const TextContainer = styled.div`
  left: 120px;
  height: auto;
  width: auto;
  color: white;
  background: linear-gradient(to right, #006778, #e0e0e0,);
  border-radius: 15px 15px 0px 0px;
  ${mq({
    position: ['static', 'static', 'static', 'relative'],
    left: ['', '', '0px'],
    padding: ['10px', '10px', '10px', '50px'],
  })};
`;