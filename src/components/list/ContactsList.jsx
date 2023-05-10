import { SliderTrack } from 'components/slider/ContactsSlider';

import {
  ContactsItem,
  ContactsTitle,
  DeleteButton,
  ContactsText,
  Container,
} from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContacts } from 'redux/operations';

export const ContactsListRender = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();

  function onDelete(index) {
    dispatch(deleteContacts(index));
  }
  function hendleFind() {
    const normalizedFilter = filters.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const contactsData = hendleFind();

  return (
    <Container>
      <SliderTrack>
        {contactsData.map(({ name, number, id }, index) => (
          <ContactsItem key={nanoid()}>
            <ContactsTitle>{name}</ContactsTitle>
            <ContactsText>{number}</ContactsText>
            <DeleteButton onClick={() => onDelete(id)} key={index}>
              Delete
            </DeleteButton>
          </ContactsItem>
        ))}
      </SliderTrack>
    </Container>
  );
};
