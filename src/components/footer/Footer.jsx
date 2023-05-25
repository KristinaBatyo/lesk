/* eslint-disable jsx-a11y/alt-text */
import {
  FooterStyled,
  Nav,
  ContactList,
  ContactItem,
  Mail,
  Number,
  Img,
  Adress,
  Iframe,
  Local,
  LocalMobile,
  //   NavLogo,
} from './Footer.styled';

export const Footer = () => {
    return (
      <FooterStyled>
        <Adress>
          <Iframe
            name="iframe1"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10243.54106564588!2d14.364999972535408!3d50.06971031712511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95a5eaad1ae1%3A0xe096bfa9eab40e77!2zVnJjaGxpY2vDqWhvIDQ4NC80NSwgMTUwIDAwIFByYWhhIDUtS2_FocOtxZllLCDQp9C10YXRltGP!5e0!3m2!1suk!2sua!4v1683217985699!5m2!1suk!2sua"
          />
          <ContactList>
            <ContactItem>
              <Mail href="mailto:info@devstudio.com">
                leskablesk1@seznam.cz
              </Mail>
            </ContactItem>
            <ContactItem>
              <Number href="tel:+420777043272">+420 777 043 272</Number>
            </ContactItem>
            <ContactItem>
              <Local
                href="https://goo.gl/maps/qxyAUHJcafWaHDPN7?coh=178573&entry=tt"
                target="blank"
              >
                {' '}
                Křešínská 153/4
              </Local>
              <Local
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10243.54106564588!2d14.364999972535408!3d50.06971031712511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95a5eaad1ae1%3A0xe096bfa9eab40e77!2zVnJjaGxpY2vDqWhvIDQ4NC80NSwgMTUwIDAwIFByYWhhIDUtS2_FocOtxZllLCDQp9C10YXRltGP!5e0!3m2!1suk!2sua!4v1683217985699!5m2!1suk!2sua"
                target="iframe1"
              >
                {' '}
                Pobočka: Vrchlického 484/45 Praha 5 Košíře 150 00
              </Local>
              {/* <p>Praha, Vrchlického 484/45</p> */}
            </ContactItem>
            <ContactItem>
              <LocalMobile
                href="https://goo.gl/maps/qxyAUHJcafWaHDPN7?coh=178573&entry=tt"
                target="blank"
              >
                {' '}
                Křešínská 153/4
              </LocalMobile>
              <LocalMobile
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10243.54106564588!2d14.364999972535408!3d50.06971031712511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95a5eaad1ae1%3A0xe096bfa9eab40e77!2zVnJjaGxpY2vDqWhvIDQ4NC80NSwgMTUwIDAwIFByYWhhIDUtS2_FocOtxZllLCDQp9C10YXRltGP!5e0!3m2!1suk!2sua!4v1683217985699!5m2!1suk!2sua"
                target="blank"
              >
                {' '}
                Pobočka: Vrchlického 484/45 Praha 5 Košíře 150 00
              </LocalMobile>
              {/* <p>Praha, Vrchlického 484/45</p> */}
            </ContactItem>
          </ContactList>
        </Adress>
        <Nav>
          <Img
            src={require('../image/logoo.jpg')}
            alt="Uklid Praha"
          />
        </Nav>
      </FooterStyled>
    );
};

