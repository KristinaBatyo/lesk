import { ReactComponent as ButtonClose } from '../image/closebtn.svg';
import {
  Menu,
  MenuContent,
  Blur,
  MenuHeader,
  MobileList,
  MobileLink,
  MobileItem,
  BtnClose,
  ContactList,
  ContactItem,
  Number,
  Mail,
} from './MobileMenu.styled';
import { nanoid } from 'nanoid';

export const MobileMenu = ({items, active, setActive}) => {
  return (
    <Menu
      className={active ? 'menu active' : 'menu'}
      onClick={() => setActive(false)}
    >
      <Blur />
      <MenuContent onClick={e => e.stopPropagation()}>
        <MenuHeader>
          <BtnClose type="button" onClick={() => setActive(!active)}>
            <ButtonClose fill= "white"/>
          </BtnClose>
        </MenuHeader>
        <MobileList>
          {items.map(item => (
            <MobileItem key={nanoid()}>
              <MobileLink href={item.href}>{item.value}</MobileLink>
            </MobileItem>
          ))}
        </MobileList>
        <ContactList>
          <ContactItem>
            <Mail href="mailto:leskablesk1@seznam.cz">
              leskablesk1@seznam.cz
            </Mail>
          </ContactItem>
          <ContactItem>
            <Number href="tel:+380961111111">+420 777 043 272</Number>
          </ContactItem>
        </ContactList>
      </MenuContent>
    </Menu>
  );
};
