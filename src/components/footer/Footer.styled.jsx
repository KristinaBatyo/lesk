import styled from '@emotion/styled';
import facepaint from 'facepaint'

const mq = facepaint(
  [
    '@media(max-width: 479px)',
    '@media(min-width: 480px)',
    '@media(min-width: 768px)',
    '@media(min-width: 1200px)',
  ],
  { literal: true }
);

export const FooterStyled = styled.footer`
  // padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-style: solid;
  border-color: #ececec;
  background-color: #fff;
  ${mq({
    height: ['150px', '150px', '200px', '200px'],
    padding: ['15px', '15px', '', '0'],
  })};
`;
export const Img = styled.img`
  ${mq({
    width: ['60px', '140px', '200px', '200px'],
    height: ['auto'],
    opacity: ['0', '0', '1', '1'],
    visibility: ['hidden', 'hidden', 'visible', 'visible'],
    display: ['none', 'none', 'block', 'block'],
  })};
`;

export const Nav = styled.div`
  font-family: Raleway, sans-serif;
  line-height: 1.19;
  letter-spacing: 0.03em;
  text-decoration: none;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  align-items: center;
`;





export const ContactList = styled.ul`
  //   display: flex;
  margin-left: 0px;
  padding: 0px;
  ${mq({
    fontSize: ['12px', '12px', '14px', '14px'],
    marginLeft: ['0px', '0px', '40px', '40px'],
  })};
`;

export const ContactItem = styled.li`
  list-style: none;
  ${mq({
    marginTop: ['10px', '10px', '15px'],
  })};
`;

export const Mail = styled.a`
  color: #025260;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;

  transition: color 250ms linear, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #e6ba95;
  }
  padding-right: 50px;
  ${mq({
    fontSize: ['12px', '14px', '18px', '18px'],
  })};
`;

export const Number = styled.a`
  color: #025260;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;

  transition: color 250ms linear, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #e6ba95;
  }
  ${mq({
    fontSize: ['12px', '14px', '18px', '18px'],
  })};
`;

export const Adress = styled.address`
  color: #025260;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const Iframe = styled.iframe`
  width: 300px;
  height: auto;
  border: 0;
  padding: 15px;
  allowfullscreen: '';
  loading: lazy;
  referrerpolicy: no-referrer-when-downgrade;
  ${mq({
    width: ['0px', '0px', '200px', '400px'],
    height: ['0px', '0px', '200px', '200px'],
  })};
`;

export const Local = styled.a`
  color: #025260;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;

  transition: color 250ms linear, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #e6ba95;
  }
  padding-right: 50px;
  ${mq({
    fontSize: ['', '', '18px', '18px'],
    opacity: ['0', '0', '1', '1'],
    visibility: ['hidden', 'hidden', 'visible', 'visible'],
    display: ['none', 'none', 'block', 'block'],
  })};
`;

export const LocalMobile = styled.a`
  color: #025260;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;
  margin-top: 15px;
  transition: color 250ms linear, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #e6ba95;
  }
  padding-right: 50px;
  ${mq({
    fontSize: ['12px', '14px', '', ''],
    opacity: ['1', '1', '0', '0'],
    visibility: ['visible', 'visible', 'hidden', 'hidden'],
    display: ['block', 'block', 'none', 'none'],
  })};
`;