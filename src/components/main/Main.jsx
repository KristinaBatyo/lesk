import {
  Img,
  Title,
  HeroContainer,
  TextContainer,
  Paragraph,
} from './Main.styled';

export const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <Title>We Help You Make Modern Furniture</Title>
        <Paragraph>
          All of our furniture uses the best materials and choices for our
          customers.All of our furniture uses the best materials{' '}
        </Paragraph>
      </TextContainer>

      <Img src={require('../image/rectangle.jpg')} alt="Tacos With Lime" />
    </HeroContainer>
  );
};
