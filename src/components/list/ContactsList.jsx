import { SliderTrack } from 'components/slider/ContactsSlider';
import { nanoid } from 'nanoid';

import {
  ContactsItem,
  ContactsTitle,
  ContactsText,
  Container,
  Container2,
  CeníkItem,
  ContactsListStyled,
} from './ContactsList.styled';

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

export const CeníkFormulář = () => {
  return (
    <Container>
      <SliderTrack>
        {ceník.map(contact => (
          <ContactsItem key={contact.id}>
            <ContactsTitle>{contact.title}</ContactsTitle>
            <ContactsText>{contact.text}</ContactsText>
            <ContactsListStyled>
              <CeníkItem>{contact.li1}</CeníkItem>
              <CeníkItem>{contact.li2}</CeníkItem>
              <CeníkItem>{contact.li3}</CeníkItem>
            </ContactsListStyled>
          </ContactsItem>
        ))}
      </SliderTrack>
    </Container>
  );
};
export const CeníkFormulář2 = () => {
  return (
    <Container2>
      <SliderTrack>
        {ceník2.map(contact => (
          <ContactsItem key={contact.id}>
            <ContactsTitle>{contact.title}</ContactsTitle>
            <ContactsText>{contact.text}</ContactsText>
            <ContactsListStyled>
              <CeníkItem>{contact.li1}</CeníkItem>
              <CeníkItem>{contact.li2}</CeníkItem>
              <CeníkItem>{contact.li3}</CeníkItem>
            </ContactsListStyled>
          </ContactsItem>
        ))}
      </SliderTrack>
    </Container2>
  );
};
