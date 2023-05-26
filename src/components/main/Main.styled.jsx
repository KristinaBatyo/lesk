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

export const Img = styled.img`
  display: block;
  margin-right: auto;
  height: 175px;
  width: 243px;
    ${mq({
      width: ['', '', '386px', '900px'],
      height: ['', '', '250px', '700px'],
      marginTop: ['', 'auto', '', ''],
      marginBottom: ['', 'auto', '', ''],
      marginLeft: ['auto', 'auto', 'auto', '-200px'],
      'z-index': ['-1'],
    })};
`;

export const Title = styled.h1`
  position: static;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  color: #006778;
  ${mq({
    color: ['', '', '#FFFFFF'],
    backgroundColor: ['', '', '#006778'],
    width: ['', '', 'inherit', 'inherit'],
  })};
`;
export const List = styled.ul`
  position: static;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  width: 100%;
  padding: 0px;
`;

export const Link = styled.a`
  text-decoration: none;
  transition: color 250ms linear, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    color: white;
  }
  ${mq({
    color: ['#006778', '#006778', 'white'],
  })};
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
  display: inline-block;
  z-index: -1;
  ${mq({
    display: ['block', 'flex', 'flex'],
    flexDirection: ['', 'row'],
    marginTop: ['100px', '120px'],
    top: ['', '350px', '200px', '200px'],
  })};
`;

export const TextContainer = styled.div`
  position: relative;
  left: 120px;
  ${mq({
    position: ['static', 'static', 'static', 'relative'],
    marginTop: ['140', '', '100px', '100px'],
    top: ['', '', '', '100px'],
    color: ['', '', '#FFFFFF'],
    backgroundColor: ['', '#FFFFFF', '#006778'],
    height: ['', '', '', '550px'],
    width: ['', '', '370px', ''],
    left: ['', '', '0px'],
    padding: ['', '', '10px', '50px'],
    zIndex: ['', 1, ''],
  })};
`;