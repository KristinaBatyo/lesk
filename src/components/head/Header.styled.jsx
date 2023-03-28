import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: #ececec;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLogo = styled.p`
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  text-decoration: none;
  margin-right: 93px;
  padding-top: 25px;
  padding-bottom: 25px;
`;


export const LogoColor = styled.span`
  color: blue;
`;

export const ContactList = styled.ul`
  display: flex;
  margin-left: auto;
`;

export const ContactItem = styled.li`
  list-style: none;
  
`;

export const Mail = styled.a`
  color: gray;
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
  color: gray;
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