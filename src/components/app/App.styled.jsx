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

export const AppContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  background-color: #fff;

  padding-left: 15px;
  padding-right: 15px;
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  color: #006778;
  ${mq({
    fontSize: ['', '', '50px'],
    marginTop: ['50px', '50px', '150px'],
  })};
`;
export const Container = styled.div`
  // display: flex;
  width: 100%;
`;

export const TitleSeo = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
  width: 100%;
`;

