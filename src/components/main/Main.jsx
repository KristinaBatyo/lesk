import {
  Img,
  Title,
  HeroContainer,
  TextContainer,
  List,
  Item,
  Link,
  ImgList,
  ImgContainer,
} from './Main.styled';
import image from '../image/girl.webp';
import top from '../image/top-uklid.png';
import React from 'react';

const Hero = () => {

  return (
    <HeroContainer id="nabizime">
      <TextContainer>
        <Title>Nabizime pro vas:</Title>
        <List>
          <Item>
            {' '}
            <Link href="#objednat">
              <ImgList src={top} alt="Top uklid" />
              Úklid domácností, rodinných domů a bytů.
            </Link>
          </Item>
          <Item>
            {' '}
            <Link href="#objednat">
              <ImgList src={top} alt="Top uklid" />
              Uklid hotelu a apartmany.
            </Link>
          </Item>
          <Item>
            {' '}
            <Link href="#objednat">
              <ImgList src={top} alt="Top uklid" />
              Úklid kanceláří a firemních prostory.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <ImgList src={top} alt="Top uklid" />
              Úklid po malování, stavbě a rekonstrukci.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <ImgList src={top} alt="Top uklid" />
              Úklid hal, garáží. a průmyslových.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <ImgList src={top} alt="Top uklid" />
              Úklid společných prostor.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <ImgList src={top} alt="Top uklid" />
              Úklid restaurace.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <ImgList src={top} alt="Top uklid" />
              Rekonstrukce bytu.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <ImgList src={top} alt="Top uklid" />
              Drobne zednicke prace.
            </Link>
          </Item>
        </List>
      </TextContainer>
      <ImgContainer >
        <Img src={image} alt="uklidova firma" />
      </ImgContainer>
    </HeroContainer>
  );
};


export default Hero;