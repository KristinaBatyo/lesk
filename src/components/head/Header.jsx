/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import {ReactComponent as MyButton} from '../image/menu-btn.svg'
import {
  HeaderStyled,
  Nav,
  ContactList,
  ContactItem,
  Mail,
  Number,
  Img,
  MenuBtn,
  NavList,
  NavItem,
  NavLink,
  //   NavLogo,
} from './Header.styled';
import { MobileMenu } from 'components/mobile-menu/MobileMenu';

const Head = () => {


  const items = [
    { value: 'Nabizime pro vas', href: '#nabizime' },
    { value: 'Ceník Služeb', href: '#ceník' },
    { value: 'Recenze', href: '#recenze' },
    { value: 'O nás', href: '#onás' },

    // { value: 'Магазин', href: '/mainss' },
  ];
  const [menuActive, setMenuActive] = useState(false);


  return (
    <HeaderStyled id="">
      <MenuBtn type="button" onClick={() => setMenuActive(!menuActive)}>
        <MyButton fill="white" />
      </MenuBtn>
      <Nav>
        <a href="/">
          {' '}
          <Img
            src={require('../image/uklid-praha.jpg')}
            alt="Uklid Praha"
            width="70px"
            height="130px"
          />
        </a>
      </Nav>
      <NavList>
        <NavItem>
          <NavLink href="#nabizime"> Nabizime pro vas</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#ceník">Ceník Služeb</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#recenze">Recenze</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#onás">O nás</NavLink>
        </NavItem>
      </NavList>
      <ContactList>
        <ContactItem>
          <Mail href="mailto:leskablesk1@seznam.cz">leskablesk1@seznam.cz</Mail>
        </ContactItem>
        <ContactItem>
          <Number href="tel:+420777043272">+420 777 043 272</Number>
        </ContactItem>
      </ContactList>
      <MobileMenu active={menuActive} setActive={setMenuActive} items={items} />
    </HeaderStyled>
  );
  
};


export default Head;