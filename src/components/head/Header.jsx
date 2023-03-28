import {
  HeaderStyled,
  Container,
  Nav,
  LogoColor,
  ContactList,
  ContactItem,
  Mail,
  Number,
  NavLogo,
} from './Header.styled';

export const Head = () => {
    return (
      <HeaderStyled>

          <Nav>
            <NavLogo>
              Vi<LogoColor>za</LogoColor>
            </NavLogo>
          </Nav>
          <ContactList>
            <ContactItem>
              <Mail
                href="mailto:info@devstudio.com"
                
              >
                {/* <svg class="contact__icon" width="16px" height="12px">
                  <use href="./images/icons.svg#icon-envelope"></use>
                </svg>{' '} */}
                info@devstudio.com
              </Mail>
            </ContactItem>
            <ContactItem>
              <Number href="tel:+380961111111">
                {/* <svg class="contact__icon" width="16px" height="12px">
                  <use href="./images/icons.svg#icon-vector"></use>
                </svg>{' '} */}
                +420 777 043 272
              </Number>
            </ContactItem>
          </ContactList>
      </HeaderStyled>
    );
};
