import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  ContactMessage,
  ContactContainer,
  Title,
  Container,
  Paragraph,
  FormName,
  FormPhone,
  NameInput,
  PhoneInput,
  Form,
  Button,
} from './FormSpree.styled';

function CallBackForm() {
  const [state, handleSubmit] = useForm('xbjeblej');
  if (state.succeeded) {
    return <ContactMessage>Děkujeme, že jste se připojili!</ContactMessage>;
  }

    return (
      <ContactContainer>
        <Container>
          <Title>Chcete si objednat úklid?</Title>
          <Paragraph>
            Vyplňte prosím formulář a náš konzultant vám v blízké budoucnosti
            zavolá.
          </Paragraph>
          <Form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xbjeblej"
            method="post"
          >
            <FormName htmlFor="name">Název</FormName>
            <NameInput id="name" name="name" type="text" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <FormPhone htmlFor="phone">Telefonní číslo</FormPhone>
            <PhoneInput id="phone" type="phone number" name="phone" />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
            <Button type="submit" disabled={state.submitting}>
              Odeslat
            </Button>
          </Form>
        </Container>
      </ContactContainer>
    );
}


export default CallBackForm;
