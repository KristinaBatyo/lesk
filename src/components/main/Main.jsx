import {
  Img,
  Title,
  HeroContainer,
  TextContainer,
  List,
  Item,
  Link,
} from './Main.styled';
import image from '../image/cisty.jpg';
import top from '../image/top-uklid.png';
import React from 'react';

const Hero = () => {

    React.useEffect(() => {
      const img = new Image();
      img.src = image;
    }, []);
  
  return (
    <HeroContainer id="nabizime">
      <TextContainer>
        <Title>Nabizime pro vas:</Title>
        <List>
          <Item>
            {' '}
            <Link href="#objednat">
              <img src={top} alt="Top uklid" width="20px" height="20px" />
              Úklid domácností, rodinných domů a bytů.
            </Link>
          </Item>
          <Item>
            {' '}
            <Link href="#objednat">
              <img src={top} alt="Top uklid" width="20px" height="20px" />
              Uklid hotelu a apartmany.
            </Link>
          </Item>
          <Item>
            {' '}
            <Link href="#objednat">
              <img src={top} alt="Top uklid" width="20px" height="20px" />
              Úklid kanceláří a firemních prostory.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img src={top} alt="Top uklid" width="20px" height="20px" />
              Úklid po malování, stavbě a rekonstrukci.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img src={top} alt="Top uklid" width="20px" height="20px" />
              Úklid hal, garáží. a průmyslových.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img src={top} alt="Top uklid" width="20px" height="20px" />
              Úklid společných prostor.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img src={top} alt="Top uklid" width="20px" height="20px" />
              Úklid restaurace.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img src={top} alt="Top uklid" width="20px" height="20px" />
              Rekonstrukce bytu.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img src={top} alt="Top uklid" width="20px" height="20px" />
              Drobne zednicke prace.
            </Link>
          </Item>
        </List>
      </TextContainer>

      <Img src={image} alt="uklidova firma" loading="lazy" />
    </HeroContainer>
  );
};


export default Hero;