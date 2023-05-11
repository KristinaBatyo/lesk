import styled from '@emotion/styled';
import facepaint from 'facepaint';



const backgroundImage = `url(${require('../image/Presentation.jpg')})`;

const mq = facepaint(
  [
    '@media(max-width: 479px)',
    '@media(min-width: 480px)',
    '@media(min-width: 768px)',
    '@media(min-width: 1200px)',
  ],
  { literal: true }
);

export const ContactMessage = styled.p`
  color: #025260;
  font-weight: 500;
  font-size: 34px;
  line-height: 1.14;
  font-family: Raleway, sans-serif;
  //   background-color: #e6ba95;
  text-align: center;
  text-shadow: 1px 1px 1px white, 2px 2px 1px #e6ba95;
  
`;

export const ContactContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    ${backgroundImage};
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #025260; /* Колір фону за замовчуванням */
  ${mq({
    minHeight: ['auto', '', '', '700px'],
    backgroundColor: [
      '#025260',
      '',
      '',
      '',
    ] /* Колір фону для кожної ширини екрану */,
  })};
`;
export const Container = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mq({
    paddingTop: ['15px', '50px', '', '70px'],
  })};
`;

export const Title = styled.h1`
  color: white;
  font-weight: 500;
  line-height: 1.14;
  font-family: Raleway, sans-serif;
  text-align: center;
  ${mq({
    fontSize: ['10px', '18px', '40px', '50px'],
  })};
`;

export const Paragraph = styled.p`
  color: white;
  font-weight: 500;
  line-height: 1.14;
  font-family: Raleway, sans-serif;
  //   background-color: #e6ba95;
  width: 90%;
  margin: 0;
  margin-bottom: 10px;

  ${mq({
    fontSize: ['6px', '10px', '18px', '20px'],
  })};
`;

export const FormName = styled.label`
  color: white;
  margin: 0;

  ${mq({
    fontSize: ['6px', '14px', '20px', '20px'],
  })};
`;

export const FormPhone = styled.label`
  padding-top: 10px;
  color: white;
  ${mq({
    fontSize: ['6px', '14px', '20px', '20px'],
  })};
`;
export const EmailLabel = styled.label`
  padding-top: 10px;
  color: white;
  ${mq({
    fontSize: ['6px', '14px', '20px', '20px'],
  })};
`;
export const DotazLabel = styled.label`
  padding-top: 10px;
  color: white;
  ${mq({
    fontSize: ['6px', '14px', '20px', '20px'],
  })};
`;


export const NameInput = styled.input`
  width: 90%;
  margin: 0;
  ${mq({
    height: ['10px', '', '24px', '40px'],
  })};
`;

export const PhoneInput = styled.input`
  width: 90%;
  margin: 0;
  ${mq({
    height: ['10px', '', '24px', '40px'],
  })};
`;
export const EmailInput = styled.input`
  width: 90%;
  margin: 0;
  ${mq({
    height: ['10px', '', '24px', '40px'],
  })};
`;


    
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${mq({
    marginTop: ['', '', '', '40px'],
  })};
`;


export const Button = styled.button`
  margin-bottom: 5px;
  padding: 5px;
  background-color: #025260;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #f5f5f5;
    transform: scale(1.03);
    outline: none;
    color: #025260;
  }
  ${mq({
    marginTop: ['5px', '5px', '5px', '20px'],
    width: ['60px', '100px', '100px', '200px'],
    height: ['24px', '', '24px', '40px'],
  })};
`;

export const Select = styled.select`
  width: 90%;
  margin: 0;
  ${mq({
    height: ['20px', '', '24px', '40px'],
  })};
`;