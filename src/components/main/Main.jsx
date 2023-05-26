import {
  Img,
  Title,
  HeroContainer,
  TextContainer,
  List,
  Item,
  Link,
} from './Main.styled';

const Hero = () => {
  return (
    <HeroContainer id="nabizime">
      <TextContainer>
        <Title>Nabizime pro vas:</Title>
        <List>
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-úklid.png')}
                alt="Top úklid"
                width="15px"
                height="auto"
              />
              Úklid domácností, rodinných domů a bytů.
            </Link>
          </Item>
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-úklid.png')}
                alt="Top úklid"
                width="15px"
                height="auto"
              />
              Uklid hotelu a apartmany.
            </Link>
          </Item>
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-úklid.png')}
                alt="Top úklid"
                width="15px"
                height="auto"
              />
              Úklid kanceláří a firemních prostory.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-úklid.png')}
                alt="Top úklid"
                width="15px"
                height="auto"
              />
              Úklid po malování, stavbě a rekonstrukci.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-úklid.png')}
                alt="Top úklid"
                width="15px"
                height="auto"
              />
              Úklid hal, garáží. a průmyslových.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-úklid.png')}
                alt="Top úklid"
                width="15px"
                height="auto"
              />
              Úklid společných prostor.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-úklid.png')}
                alt="Top úklid"
                width="15px"
                height="auto"
              />
              Úklid restaurace.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-úklid.png')}
                alt="Top úklid"
                width="15px"
                height="auto"
              />
              Rekonstrukce bytu.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-úklid.png')}
                alt="Top úklid"
                width="15px"
                height="auto"
              />
              Drobne zednicke prace.
            </Link>
          </Item>
        </List>
      </TextContainer>

      <Img
        src={require('../image/čistý.jpg')}
        alt="úklidová firma"
        // loading="lazy"
      />
    </HeroContainer>
  );
};


export default Hero;