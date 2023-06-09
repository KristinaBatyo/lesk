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
  EmailInput,
  EmailLabel,
  DotazLabel,
  Select,
} from './FormSpree.styled';

function CallBackForm() {
  const [state, handleSubmit] = useForm('xbjeblej');
  if (state.succeeded) {
    return <ContactMessage>Děkujeme, že jste se připojili!</ContactMessage>;
  }

    return (
      <ContactContainer id="objednat">
        <Container>
          <Title>Chcete si objednat úklid?</Title>
          <Paragraph>
            Vyplňte prosím formulář a náš konzultant v nejbližší době vám
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
            <EmailLabel htmlFor="email">Email Address</EmailLabel>
            <EmailInput id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <DotazLabel htmlFor="message">Dotaz</DotazLabel>
            <Select id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
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
