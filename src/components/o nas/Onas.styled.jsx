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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ONasContainer = styled.div`
  justify-content: center;
  align-items: center;
  ${mq({
    display: ['block', 'block', 'flex'],
  })};
`;

export const Title = styled.h2`
  height: auto;
  text-align: center;
  background-color: #025260;
  color: #fff;
  padding: 5px;
  margin-bottom: 0.5rem;
  ${mq({
    fontSize: ['1.2rem', '1.3rem', '1.4rem', '1.5rem'],
  })}
`;

export const Text = styled.p`
  flex-wrap: wrap;
  height: auto;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  color: black;
  background-color: #f4f4f4;
  ${mq({
    fontSize: ['13px', '15px', '20px', '20px'],
  })};
`;

export const TextFlex = styled.p`
  flex-wrap: wrap;
  height: auto;
  font-weight: 500;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  color: black;
  background-color: #f4f4f4;
  ${mq({
    fontSize: ['13px', '15px', '20px', '20px'],
      marginLeft: ['', '', '20px', '20px'],
  })};
`;
export const Flex = styled.div`
  ${mq({
    display: ['', '', '', 'flex'],
  })};
`;
export const Img = styled.img`
  ${mq({
    minWidth: ['50%', '', '50%'],
  })};
`;


export const SirokeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mq({
    minWidth: ['', '', '', '47%'],
    justifyContent: ['', '', '', 'flex-start'],
    marginRight: ['', '', '', '40px'],
    paddingLeft: ['', '', '', '20px'],
  })};
`;
export const ListContainer = styled.div`
  ${mq({
    minWidth: ['', '', '', '50%'],
    display: ['', '', '', 'flex'],
    alignItems: ['', '', '', 'flex-start'],
    flexDirection: ['', '', '', 'column'],
  })};
`;

export const Item = styled.li`
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


export const List = styled.ul`
  margin: 0px;
  ${mq({
    paddingLeft: ['', '', '', '0px'],
    paddingBottom: ['30px', '50px', '50px', '50px'],
  })};
`;

export const DivContainer = styled.div`
  background-color: #f4f4f4;
`;