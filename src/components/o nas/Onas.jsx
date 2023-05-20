import {
  Container,
  ONasContainer,
  SirokeContainer,
  Title,
  Text,
  Item,
  TextFlex,
  Flex,
  ListContainer,
  DivContainer,
  List,
  Img,
} from './Onas.styled';
import { ReactComponent as Check } from '../image/úklidové-služby.svg';
import { ReactComponent as Number } from '../image/úklidová-firma-praha.svg';
import { ReactComponent as Heart } from '../image/úklidová-firma.svg';
import { ReactComponent as Money } from '../image/úklid-bytových-domů.svg';
import { ReactComponent as User } from '../image/user.svg';
import { ReactComponent as Eye } from '../image/úklidy-domácností.svg';
import { ReactComponent as Home } from '../image/komplexní-úklid.svg';
import { ReactComponent as Lab } from '../image/oddělení-okamžitého-úklidu.svg';








export const ONas = () => {

  return (
    <DivContainer id="onás">
      <ONasContainer>
        <Img
          src={require('../image/úklid.jpg')}
          alt="Chcete si objednat úklid?"
          width="100%"
        />
        <Container>
          <Title>Úklidová firma Praha</Title>
          <TextFlex>
            Naše úklidová firma se zabývá komplexním poskytováním služeb v
            oblasti úklidu domácností, bytů, domů, úklidu firem a úklidu
            průmyslových objektů v Praze a okolí. Služby nabízíme jednotlivcům,
            malým i velkým firmám. Ke každé zakázce přistupujeme individuálně
            dle Vašich požadavků a potřeb. Naši zaměstnanci jsou proškolení
            profesionálové. Naším cílem je dlouhodobá spolupráce, založená na
            pravidlech a transparentnosti poskytovaných služeb s důrazem na
            poměr ceny a kvality. Na základě telefonického nebo osobního
            kontaktu vytvoříme plán služeb šitý na míru Vašim preferencím.
          </TextFlex>
        </Container>
      </ONasContainer>
      <Flex>
        <SirokeContainer>
          <Title>Široké spektrum úklidových služeb</Title>
          <Text>
            V oblasti úklidových služeb se zabýváme úklidem domácností (bytů a
            rodinných domů), kanceláří a firemních prostor, panelových domů.
            Zajišťujeme pravidelné i jednorázové úklidy a to strojové i ruční.
            Jsme schopni uklidit po rekonstrukci, malířích i před kolaudací.
            Používáme profesionální čistící prostředky, které jsou šetrné k
            životnímu prostředí a Vašemu majetku. Šetříme Váš čas, spolehněte se
            na profesionály. Nezávazně nás kontaktujte a vytvoříme Vám cenovou
            nabídku.
          </Text>
        </SirokeContainer>
        <ListContainer>
          <Title>Naši firmu budete chtít protože…</Title>
          <List>
            <Item>
              <Check fill="#e6ba95" width="20px" /> nejdůležitější je pro nás
              kvalitně odvedená práce
            </Item>
            <Item>
              {' '}
              <Money fill="#e6ba95" width="20px" /> razíme heslo, maximální
              kvalita za rozumnou cenu
            </Item>
            <Item>
              {' '}
              <User fill="#e6ba95" width="20px" />
              disponujeme vyškoleným profesionálním personálem
            </Item>
            <Item>
              {' '}
              <Number fill="#e6ba95" width="20px" />
              přizpůsobíme se vašim požadavkům
            </Item>
            <Item>
              {' '}
              <Eye fill="#e6ba95" width="20px" />
              soukromí klientů je pro nás důležité
            </Item>
            <Item>
              {' '}
              <Home fill="#e6ba95" width="20px" />
              neseme odpovědnost za provedenou práci
            </Item>
            <Item>
              {' '}
              <Lab fill="#e6ba95" width="20px" />
              používáme moderní úklidové a čistící prostředky
            </Item>
            <Item>
              {' '}
              <Heart fill="#e6ba95" width="20px" />
              máme rádi naši práci
            </Item>
          </List>
        </ListContainer>
      </Flex>
    </DivContainer>
  );
};
