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
  ${mq({
    width: ['', '', '', ''],
    marginLeft: ['', '', '20px', '20px'],
    paddingRight: ['20px', '20px', '20px', '20px'],
    paddingLeft: ['20px', '20px', '0px', '0px'],
  })};
`;

export const ONasContainer = styled.div`
  align-items: center;
  justify-content: flex-start;
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
  font-weight: 500;
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
  })};
`;
export const Flex = styled.div`
  ${mq({
    display: ['', '', '', 'flex'],
  })};
`;
export const Img = styled.img`
  justify-content: center;
  display: block;
  ${mq({
    width: ['250px', '400px', '393px', '597px'],
    height: ['auto', 'auto', 'auto', 'auto'],
    paddingTop: ['20px', '20px', '', ''],
    marginRight: ['auto', 'auto', '0', '0'],
    marginLeft: ['auto', 'auto', '0', '0'],
    paddingLeft: ['', '', '20px', '20px'],
  })};
`;
export const Img2 = styled.img`
  justify-content: center;
  align-items: center;
  ${mq({
    width: ['250px', '400px', '400px', '400px'],
    height: ['auto', 'auto', 'auto', 'auto'],
    marginLeft: ['', '', '200px', '0px'],
  })};
`;
export const Img3 = styled.img`
  justify-content: center;
  align-items: center;
  ${mq({
    width: ['0', '0', '0', '500px'],
    height: ['auto', 'auto', 'auto', 'auto'],
    marginTop: ['', '', '', '200px'],
    visibility: ['hidden', 'hidden', 'hidden', 'visible'],
  })};
`;

export const SirokeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mq({
    minWidth: ['', '', '', '40%'],
    justifyContent: ['', '', '', 'flex-start'],
    marginRight: ['', '', '', '60px'],
    paddingLeft: ['20px', '20px', '', '20px'],
    paddingRight: ['20px', '20px', '', '0px'],
  })};
`;
export const ListContainer = styled.div`
  ${mq({
    minWidth: ['', '', '', '50%'],
    display: ['', '', '', 'flex'],
    alignItems: ['', '', 'center', 'flex-start'],
    flexDirection: ['', '', '', 'column'],
  })};
`;

export const Item = styled.li`
  display: flex;
  max-width: 100%;
  height: auto;
  font-weight: 500;
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