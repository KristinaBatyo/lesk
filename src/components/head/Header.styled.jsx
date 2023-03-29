import styled from '@emotion/styled';
import facepaint from 'facepaint'

const mq = facepaint(
  [
    '@media(min-width: 420px)',
    '@media(min-width: 768px)',
    '@media(min-width: 1200px)',
  ],
  { literal: true }
);

export const HeaderStyled = styled.header`
  width: 600px;
  display: flex;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: #ececec;
  background-color: #025260;
  ${mq({
    width: ['480px', '768px', '1200px'],
  })};
`;

export const Nav = styled.div`
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  text-decoration: none;
  margin-right: 93px;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  align-items: center;
`;

// export const NavLogo = styled.p`
//   font-family: Raleway, sans-serif;
//   font-weight: 700;
//   font-size: 48px;
//   line-height: 1.19;
//   letter-spacing: 0.03em;
//   text-decoration: none;
//   margin-right: 93px;
//   padding-top: 25px;
//   padding-bottom: 25px;
// `;




export const ContactList = styled.ul`
//   display: flex;
  margin-left: auto;
`;

export const ContactItem = styled.li`
  list-style: none;
  
`;

export const Mail = styled.a`
  color: white;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;

  transition: color 250ms linear, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: blue;
  }
  margin-right: 50px;
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const Number = styled.a`
  color: white;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;

  transition: color 250ms linear, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: blue;
  }
  padding-top: 32px;
  padding-bottom: 32px;
`;