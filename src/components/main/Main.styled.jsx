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
  //   width: 972px;
  //   height: 700px;
  //   flex-shrink: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
  ${mq({
    width: ['243px', '243px', '486px', '972px'],
    height: ['175px', '175px', '350px', '700px'],
    marginTop: ['', 'auto', '', ''],
    marginBottom: ['', 'auto', '', ''],
    marginLeft: ['', 'auto', '-130px', '-200px'],

    // top: ['656px'],
    'z-index': ['-1'],
  })};
`;

export const Title = styled.h1`
  position: static;
  font-family: 'Montserrat';
  font-style: normal;
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
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  width: 100%;
  padding: 0px;
`;

export const Item = styled.li`
  list-style: none;

  line-height: 22px;
  ${mq({
    fontSize: ['', '', '20px'],
    fontWeight: ['', '', '400'],
    fontFamily: ['Montserrat'],
    fontStyle: ['normal'],
    lineHeight: ['', '', '42px'],

  })};
`;

export const HeroContainer = styled.div`
  width: 100%;
  display: inline-block;
  z-index: -1;
  //   margin-top: 350px;
  //   margin 120px;
  ${mq({
    display: ['block', 'flex', 'flex'],
    flexDirection: ['', 'row'],
    marginTop: ['100px', '120px'],
    top: ['', '350px', '200px', '200px'],
  })};
`;

export const TextContainer = styled.div`
  position: relative;
  //   display: block;
  //   margin-left: auto;
  //   margin-right: auto;
  //   top: 120px;
  left: 120px;
  ${mq({
    position: ['static', 'static', 'relative', 'relative'],
    marginTop: ['140', ''],
    top: ['', '', '100px'],
    color: ['', '', '#FFFFFF'],
    backgroundColor: ['', '#FFFFFF', '#006778'],
    height: ['', '', '470px', '470px'],
    width: ['', '', '470px', ''],
    left: ['', '', '0px'],
    padding: ['', '', '10px', '50px'],
    zIndex: ['', 1, ''],
    //   top:[ '120px'],
  })};
`;