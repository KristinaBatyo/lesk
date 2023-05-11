import {
  Img,
  Title,
  HeroContainer,
  TextContainer,
  List,
  Item,
} from './Main.styled';

export const Hero = () => {
  return (
    <HeroContainer id="nabizime">
      <TextContainer>
        <Title >Nabizime pro vas:</Title>
        <List>
          <Item>
            {' '}
            <img
              src={require('../image/li.png')}
              alt="Tacos With Lime"
              width="15px"
            />
            <a href=""></a>
            Úklid domácností, rodinných domů a bytů.
          </Item>
          <Item>
            <img
              src={require('../image/li.png')}
              alt="Tacos With Lime"
              width="15px"
            />
            Uklid hotelu a apartmany.
          </Item>
          <Item>
            {' '}
            <img
              src={require('../image/li.png')}
              alt="Tacos With Lime"
              width="15px"
            />
            Úklid kanceláří a firemních prostory.
          </Item>
          <Item>
            {' '}
            <img
              src={require('../image/li.png')}
              alt="Tacos With Lime"
              width="15px"
            />
            Úklid po malování, stavbě a rekonstrukci.
          </Item>
          <Item>
            {' '}
            <img
              src={require('../image/li.png')}
              alt="Tacos With Lime"
              width="15px"
            />
            Úklid hal, garáží. a průmyslových objektů.
          </Item>
          <Item>
            {' '}
            <img
              src={require('../image/li.png')}
              alt="Tacos With Lime"
              width="15px"
            />
            Úklid společných prostor.
          </Item>
          <Item>
            {' '}
            <img
              src={require('../image/li.png')}
              alt="Tacos With Lime"
              width="15px"
            />
            Úklid restaurace.
          </Item>
          <Item>
            {' '}
            <img
              src={require('../image/li.png')}
              alt="Tacos With Lime"
              width="15px"
            />
            Rekonstrukce bytu.
          </Item>
          <Item>
            {' '}
            <img
              src={require('../image/li.png')}
              alt="Tacos With Lime"
              width="15px"
            />
            Drobne zednicke prace.
          </Item>
        </List>
      </TextContainer>

      <Img src={require('../image/rectangle.jpg')} alt="Tacos With Lime" />
    </HeroContainer>
  );
};
