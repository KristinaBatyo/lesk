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
            <EmailLabel htmlFor="email">Email Address</EmailLabel>
            <EmailInput id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <DotazLabel htmlFor="attending">Dotaz</DotazLabel>
            <Select name="Dotaz" id="attending" required="">
              {/* <option value="" selected="" disabled="">
                Vybrat
              </option> */}
              <option value="Úklid domácností, rodinných domů a bytů.">
                Úklid domácností, rodinných domů a bytů.
              </option>
              <option value="Uklid hotelu a apartmany.">
                Uklid hotelu a apartmany.
              </option>
              <option value="Úklid kanceláří a firemních prostory.">
                Úklid kanceláří a firemních prostory.
              </option>
              <option value="Úklid po malování, stavbě a rekonstrukci.">
                Úklid po malování, stavbě a rekonstrukci.
              </option>
              <option value="Úklid hal, garáží. a průmyslových objektů.">
                Úklid hal, garáží. a průmyslových objektů.
              </option>
              <option value="Úklid společných prostor.">
                Úklid společných prostor.
              </option>
              <option value="Úklid restaurace.">Úklid restaurace.</option>
              <option value="Rekonstrukce bytu.">Rekonstrukce bytu.</option>
              <option value="Drobne zednicke prace.">
                Drobne zednicke prace.
              </option>
            </Select>
            <Button type="submit" disabled={state.submitting}>
              Odeslat
            </Button>
          </Form>
        </Container>
      </ContactContainer>
    );
}


export default CallBackForm;
