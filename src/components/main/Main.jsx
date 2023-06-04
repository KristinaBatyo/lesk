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
                src={require('../image/top-uklid.png')}
                alt="Top uklid"
                width="20px"
                height="20px"
              />
              Úklid domácností, rodinných domů a bytů.
            </Link>
          </Item>
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-uklid.png')}
                alt="Top uklid"
                width="20px"
                height="20px"
              />
              Uklid hotelu a apartmany.
            </Link>
          </Item>
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-uklid.png')}
                alt="Top uklid"
                width="20px"
                height="20px"
              />
              Úklid kanceláří a firemních prostory.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-uklid.png')}
                alt="Top uklid"
                width="20px"
                height="20px"
              />
              Úklid po malování, stavbě a rekonstrukci.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-uklid.png')}
                alt="Top uklid"
                width="20px"
                height="20px"
              />
              Úklid hal, garáží. a průmyslových.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-uklid.png')}
                alt="Top uklid"
                width="20px"
                height="20px"
              />
              Úklid společných prostor.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-uklid.png')}
                alt="Top uklid"
                width="20px"
                height="20px"
              />
              Úklid restaurace.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-uklid.png')}
                alt="Top uklid"
                width="20px"
                height="20px"
              />
              Rekonstrukce bytu.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/top-uklid.png')}
                alt="Top uklid"
                width="20px"
                height="20px"
              />
              Drobne zednicke prace.
            </Link>
          </Item>
        </List>
      </TextContainer>

      <Img src={require('../image/cisty.jpg')} alt="uklidova firma" />
    </HeroContainer>
  );
};


export default Hero;