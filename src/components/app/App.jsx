import { CeníkFormulář, CeníkFormulář2 } from '../list/ContactsList'; 
import { AppContainer, Title, Container } from './App.styled';
import { Head } from "components/head/Header";
import { Hero } from "components/main/Main";
import { Footer } from "components/footer/Footer";
import CallBackForm from "components/formspree/FormSpree";
import Reviews from "components/reviews/Reviews";
import { Ceník } from 'components/ceník/Ceník';
import { ONas } from 'components/o nas/Onas';


export const App = () => {

    return (
      <Container>
        <Head />
        <AppContainer>
          <Hero />
          <CallBackForm />
          <Ceník />
          <CeníkFormulář />
          <CeníkFormulář2 />
          <Title>Napsat recenzi</Title>
          <Reviews />
          <ONas />
          <Footer />
        </AppContainer>
      </Container>
    );
  }