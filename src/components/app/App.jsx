import { CenikFormular, CenikFormular2 } from '../list/CenikList'; 
import { AppContainer, Title, Container, TitleSeo } from './App.styled';
import CallBackForm from "components/formspree/FormSpree";
import Reviews from "components/reviews/Reviews";
import React, { Suspense } from 'react';

const Cenik = React.lazy(() => import('components/cenik/Cenik'));
const Head = React.lazy(() => import('components/head/Header'));
const Hero = React.lazy(() => import('components/main/Main'));
const Footer = React.lazy(() => import('components/footer/Footer'));
const ONas = React.lazy(() => import('components/o nas/Onas'));




export const App = () => {

function* generatir() {
  yield 1;
  yield 2;
}
  const it = generatir()
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);


    return (
      <Container>
        <Suspense fallback={<div>Načítání...</div>}>
          <TitleSeo>Úklidová firma Praha</TitleSeo>
          <Head />
          <AppContainer>
            <Hero />
            <CallBackForm />
            <Cenik />
            <CenikFormular />
            <CenikFormular2 />
            <Title>Napsat recenzi</Title>
            <Reviews />
            <ONas />
            <Footer />
          </AppContainer>
        </Suspense>
      </Container>
    );
  }