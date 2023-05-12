import {
  Img,
  Title,
  HeroContainer,
  TextContainer,
  List,
  Item,
  Link,
} from './Main.styled';

export const Hero = () => {
  return (
    <HeroContainer id="nabizime">
      <TextContainer>
        <Title>Nabizime pro vas:</Title>
        <List>
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/li.png')}
                alt="Tacos With Lime"
                width="15px"
              />
              Úklid domácností, rodinných domů a bytů.
            </Link>
          </Item>
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/li.png')}
                alt="Tacos With Lime"
                width="15px"
              />
              Uklid hotelu a apartmany.
            </Link>
          </Item>
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/li.png')}
                alt="Tacos With Lime"
                width="15px"
              />
              Úklid kanceláří a firemních prostory.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/li.png')}
                alt="Tacos With Lime"
                width="15px"
              />
              Úklid po malování, stavbě a rekonstrukci.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/li.png')}
                alt="Tacos With Lime"
                width="15px"
              />
              Úklid hal, garáží. a průmyslových.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/li.png')}
                alt="Tacos With Lime"
                width="15px"
              />
              Úklid společných prostor.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/li.png')}
                alt="Tacos With Lime"
                width="15px"
              />
              Úklid restaurace.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/li.png')}
                alt="Tacos With Lime"
                width="15px"
              />
              Rekonstrukce bytu.
            </Link>
          </Item>{' '}
          <Item>
            {' '}
            <Link href="#objednat">
              <img
                src={require('../image/li.png')}
                alt="Tacos With Lime"
                width="15px"
              />
              Drobne zednicke prace.
            </Link>
          </Item>
          
        </List>
      </TextContainer>

      <Img src={require('../image/rectangle.jpg')} alt="Tacos With Lime" />
    </HeroContainer>
  );
};
