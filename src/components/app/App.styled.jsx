import styled from '@emotion/styled';
import facepaint from 'facepaint';

const mq = facepaint(
  [
    '@media(min-width: 320px)',
    '@media(min-width: 480px)',
    '@media(min-width: 768px)',
    '@media(min-width: 1120px)',
  ],
  { literal: true }
);

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  box-sizing: border-box;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
`;


