import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  ContactMessage,
  ContactContainer,
  Title,
  Container,
  Paragraph,
  Form,
  Button,
  ImgContainer,
  Img,
  ImgSecond,
  Item,
  ItemTop,
} from './FormSpree.styled';
import { createTheme } from '@mui/material/styles';
import image from '../image/imageclean.webp';
import image2 from '../image/maskingclean.webp';
import image3 from '../image/image.webp';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from '@mui/material/styles';


function CallBackForm() {
  const [state, handleSubmit] = useForm('xbjeblej');
  if (state.succeeded) {
    return <ContactMessage>Děkujeme, že jste se připojili!</ContactMessage>;
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#e6ba95', 
      },
    },
  });

    return (
      <ContactContainer id="objednat">
        <ImgContainer>
          <ItemTop>
            <Img src={image} alt="firma" />
          </ItemTop>
          <Item>
            <ImgSecond src={image2} alt="uklidova firma" />
          </Item>
          <ItemTop>
            <ImgSecond src={image3} alt="uklidova firma" />
          </ItemTop>
        </ImgContainer>
        <Container>
          <Title>Chcete si objednat úklid?</Title>
          <Paragraph>
            Vyplňte prosím formulář a náš konzultant v nejbližší době vám
            zavolá.
          </Paragraph>
          <ThemeProvider theme={theme}>
            <Form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xbjeblej"
              method="post"
            >
              {/* Name */}
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Název"
                  id="name"
                  name="name"
                  variant="outlined"
                  error={state.errors.name ? true : false}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </FormControl>

              {/* Phone */}
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Telefonní číslo"
                  id="phone"
                  name="phone"
                  variant="outlined"
                  error={state.errors.phone ? true : false}
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
              </FormControl>

              {/* Email */}
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  variant="outlined"
                  error={state.errors.email ? true : false}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </FormControl>

              {/* Dotaz */}
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Dotaz"
                  id="message"
                  name="message"
                  minRows={3}
                  variant="outlined"
                  error={
                    state.errors.message ? state.errors.message : undefined
                  }
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </FormControl>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={state.submitting}
                variant="contained"
              >
                Odeslat
              </Button>
            </Form>
          </ThemeProvider>
        </Container>
      </ContactContainer>
    );
}


export default CallBackForm;
