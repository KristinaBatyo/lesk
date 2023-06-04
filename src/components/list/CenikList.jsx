import { SliderTrack } from 'components/slider/ContactsSlider';
import { nanoid } from 'nanoid';

import {
  CenikItem,
  CenikTitle,
  CenikText,
  Container,
  Container2,
  CenikItem2,
  CenikListStyled,
} from './CenikList.styled';

const ceník = [
  {
    id: nanoid(),
    title: 'Pravidelné úklidy',
    text: 'Pravidelné úklidy domácností a kanceláří',
    li1: 'Cena za 1 hod. od 140 Kč',
    li2: 'Cena za 1 m2 od 0,60 Kč',
    li3: 'Cena za úklid od 400 Kč',
  },
  {
    id: nanoid(),
    title: 'Pravidelné úklidy',
    text: 'Pravidelné úklidy komerčních prostor, škol, zdravotnických zařízení a jiných firem',
    li1: 'Cena za 1 hod. od 150 Kč',
    li2: 'Cena za 1 m2 od 0,60 Kč',
    li3: 'Cena za úklid od 400 Kč',
  },
  {
    id: nanoid(),
    title: 'Pravidelné úklidy',
    text: 'Pravidelné úklidy společných prostor',
    li1: 'Cena za 1 m2 od 0,90 Kč',
    li2: 'Cena za úklid od 500 Kč',
  },
];
const ceník2 = [
  {
    id: nanoid(),
    title: 'Jednorázové úklidy pro domácnosti a firmy',
    text: 'Úklidy generální, stavební, předkolaudačni, po rekonstrukci a malířích',
    li1: 'Cena za 1 hod. od 150 Kč',
    li2: 'Cena za 1 m2 od 15 Kč',
  },
  {
    id: nanoid(),
    title: 'Jednorázové úklidy pro domácnosti a firmy',
    text: 'Strojové čištění skladů, hal a garáží',
    li1: 'Cena za 1 m2 od 3 Kč',
  },
  {
    id: nanoid(),
    title: 'Jednorázové úklidy pro domácnosti a firmy',
    text: 'Extrakční čištění koberců a čalounění',
    li1: 'Cena za čalounění od 200 Kč',
    li2: 'Cena za 1 m2 od 14 Kč',
  },
  {
    id: nanoid(),
    title: 'Jednorázové úklidy pro domácnosti a firmy',
    text: 'Hodinová sazba jednorázových úklidů',
    li1: 'Od 150 Kč / 1 hod. / 1 úklidový pracovník',
  },
  {
    id: nanoid(),
    title: 'Jednorázové úklidy pro domácnosti a firmy',
    text: 'Mytí oken včetně rámů, výloh a jiných skleněných výplní',
    li1: 'Cena za 1 m2 od 7 Kč',
    li2: 'Ceny od 1 000 Kč',
  },
];

export const CenikFormular = () => {
  return (
    <Container>
      <SliderTrack>
        {ceník.map(contact => (
          <CenikItem key={contact.id}>
            <CenikTitle>{contact.title}</CenikTitle>
            <CenikText>{contact.text}</CenikText>
            <CenikListStyled>
              <CenikItem2>{contact.li1}</CenikItem2>
              <CenikItem2>{contact.li2}</CenikItem2>
              <CenikItem2>{contact.li3}</CenikItem2>
            </CenikListStyled>
          </CenikItem>
        ))}
      </SliderTrack>
    </Container>
  );
};
export const CenikFormular2 = () => {
  return (
    <Container2>
      <SliderTrack>
        {ceník2.map(contact => (
          <CenikItem key={contact.id}>
            <CenikTitle>{contact.title}</CenikTitle>
            <CenikText>{contact.text}</CenikText>
            <CenikListStyled>
              <CenikItem2>{contact.li1}</CenikItem2>
              <CenikItem2>{contact.li2}</CenikItem2>
              <CenikItem2>{contact.li3}</CenikItem2>
            </CenikListStyled>
          </CenikItem>
        ))}
      </SliderTrack>
    </Container2>
  );
};
