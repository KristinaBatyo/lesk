import { ContactsListRender } from "../list/ContactsList"; 
import { ContactsForm } from "components/form/ContactsForm";
import { Filter } from "components/filter/Filter";
import{AppContainer, Title} from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from "redux/operations";
import { getLoading, getError, getContacts } from 'redux/selectors';
import { Head } from "components/head/Header";

export const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const isLoading = useSelector(getLoading);
    const error = useSelector(getError);

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <AppContainer>
        <Head></Head>
        <Title>Написати відгук</Title>
        <ContactsForm />
        <Title>Відгуки</Title>
        {/* <Filter /> */}
        {isLoading && <p>Завантаження відгуків...</p>}
        {error && <p>{error}</p>}
        {contacts.length > 0 && <ContactsListRender />}
      </AppContainer>
    );
  }