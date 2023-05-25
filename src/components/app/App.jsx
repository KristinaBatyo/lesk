import { CeníkFormulář, CeníkFormulář2 } from '../list/ContactsList'; 
import { AppContainer, Title, Container, TitleSeo } from './App.styled';
import CallBackForm from "components/formspree/FormSpree";
import Reviews from "components/reviews/Reviews";
import React, { Suspense } from 'react';

const Ceník = React.lazy(() => import('components/ceník/Ceník'));
const Head = React.lazy(() => import('components/head/Header'));
const Hero = React.lazy(() => import('components/main/Main'));
const Footer = React.lazy(() => import('components/footer/Footer'));
const ONas = React.lazy(() => import('components/o nas/Onas'));




export const App = () => {

    return (
      <Container>
        <Suspense fallback={<div>Načítání...</div>}>
          <TitleSeo>Úklidová firma Praha</TitleSeo>
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
        </Suspense>
      </Container>
    );
  }