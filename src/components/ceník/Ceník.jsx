import { CeníkContainer, Container, Paragraph, Title } from './Ceník.styled';

export const Ceník = () => {
    return (
      <CeníkContainer id="ceník">
        <Container>
          <Title>Ceník</Title>
          <Paragraph>
            Všechny uvedené orientační ceny úklidových služeb jsou závislé na
            frekvenci, stupni znečištění, velikosti objektu, použitých
            přípravcích a metodě úklidu. Každou zakázku je možné shlédnout a
            vypracovat nezávazně cenovou kalkulaci. Přesnou nezávaznou kalkulaci
            vašeho úklidu získáte ihned po telefonické nebo e-mailové
            komunikaci.
          </Paragraph>
        </Container>
      </CeníkContainer>
    );
};
