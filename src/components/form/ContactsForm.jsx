import {
  ContactsContainer,
  ContactsLabel,
  ContactsButton,
  ContactsInput,
  ContactsInputs,
  Paragraph,
} from './ContactsForm.styled.jsx';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { addContacts } from 'redux/operations';
// import { getContacts } from 'redux/selectors';

export const  ContactsForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    // const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

        
        function hendleChange (e) {
            const { name, value } = e.currentTarget;
                switch (name) {
                    case 'name':
                    setName(value);
                    break;
                    case 'number':
                    setNumber(value);
                    break;
                    default:
                    return;
                }
        }
        function hendleSubmit(event) {
            event.preventDefault();
            dispatch(addContacts({ name, number }));
            reset();
        }

        function reset() {
        setName('');
        setNumber('');
        }

        return (
          <ContactsContainer onSubmit={hendleSubmit}>
            <ContactsLabel>
              <Paragraph>Název</Paragraph>
              <ContactsInput
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Назва може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
                required
                onChange={hendleChange}
                value={name}
                id={nanoid()}
              />
            </ContactsLabel>
            <ContactsLabel>
              <Paragraph>Odezva</Paragraph>
              <ContactsInputs
                type="text"
                name="number"
                required
                value={number}
                onChange={hendleChange}
              />
            </ContactsLabel>
            <ContactsButton type="submit">Přidat recenzi</ContactsButton>
          </ContactsContainer>
        );
        }
