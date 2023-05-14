import styled from "@emotion/styled";
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

export const CeníkContainer = styled.div`
  color: #025260;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  color: #025260;
  font-family: Raleway, sans-serif;
  line-height: 1.19;
  letter-spacing: 0.03em;
  font-weight: 500;
  margin-top: 0px;

  ${mq({
    fontSize: ['12px', '14px', '20px', '20px'],
  })};
`;

export const Title = styled.h2`
  color: white;
  font-family: Raleway, sans-serif;
  line-height: 1.19;
  letter-spacing: 0.03em;
  font-weight: 700;
  //   margin-top: 30px;

  background-color: #025260;
  ${mq({
    fontSize: ['20px', '25px', '30px', '30px'],
  })};
`;
