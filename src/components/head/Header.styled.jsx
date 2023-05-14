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

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: #ececec;
  background-color: #025260;
  width: 100%;
  margintop: 0px;

  ${mq({
    height: ['80px', '130px', '130px', '150px'],
    justifyContent: ['space-between', 'space-between', ''],
  })};
  position: fixed;
  z-index: 2;
  top: 0;
`;
export const Img = styled.img`
  ${mq({
    width: ['70px', '120px', '120px', '140px'],
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

export const MenuBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  margin-left: 15px;
  padding: 0;
  background-color: #025260;
  ${mq({
    opacity: ['', '', '0', '0'],
    visibility: ['', '', 'hidden', 'hidden'],
    display: ['', '', 'none', 'none'],
  })};
`;

export const ContactList = styled.ul`
  margin-left: auto;
  padding: 0px;
  ${mq({
    opacity: ['0', '0', '1', '1'],
    visibility: ['hidden', 'hidden', 'visible', 'visible'],
    display: ['none', 'none', 'block', 'block'],
  })};
`;

export const ContactItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

export const Mail = styled.a`
  color: #e6ba95;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;
  transition: color 250ms linear, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    color: white;
  }
  padding-right: 50px;
`;

export const Number = styled.a`
  color: #e6ba95;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;

  transition: color 250ms linear, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: white;
    cursor: pointer;
  }
  //   padding-top: 32px;
  //   padding-bottom: 32px;
`;

export const NavList = styled.ul`
  list-style: none;
  ${mq({
    opacity: ['0', '0', '1', '1'],
    visibility: ['hidden', 'hidden', 'visible', 'visible'],
    display: ['none', 'none', 'flex', 'flex'],
  })};
`;

export const NavItem = styled.li`
  font-family: Raleway, sans-serif;
  font-size: 15px;
  width: auto;
  margin-right: 25px;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #e6ba95;
    cursor: pointer;
  }
  ${mq({
    fontSize: ['', '', '20px', '30px'],
  })};
`;
