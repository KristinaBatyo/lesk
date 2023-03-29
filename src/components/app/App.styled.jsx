import styled from '@emotion/styled';
import facepaint from 'facepaint';

const mq = facepaint(
  [
    '@media(min-width: 420px)',
    '@media(min-width: 768px)',
    '@media(min-width: 1120px)',
  ],
  { literal: true }
);

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  box-sizing: border-box;
  width: 1200px;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  ${mq({
    width: ['480px', '768px', '1200px'],
  })};
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
`;


