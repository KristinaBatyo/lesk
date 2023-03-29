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

export const ContactsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  ${mq({
    width: ['320px', '480px', '768px', '1200px'],
  })};
`;


export const ContactsLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${mq([14, 16, 18])}px;
  font-weight: 500;
  margin-bottom: 20px;
`;



export const ContactsButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 100px;
    height: 30px;
    margin-left: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    border: none;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        background-color: #f5f5f5;
        transform: scale(1.03);
        outline: none;
    }

`;

export const ContactsInput = styled.input`
  padding: 5px;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  &:focus {
    outline: none;
  }
  ${mq({
    width: ['220px', '300px', '368px', '368px'],
  })};
`;

export const ContactsInputs = styled.input`
  height: 200px;
  padding: px;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  &:focus {
    outline: none;
  }
  ${mq({
    width: ['220px', '300px', '368px', '368px'],
  })};
`;


