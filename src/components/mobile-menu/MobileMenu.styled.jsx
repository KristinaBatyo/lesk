import styled from '@emotion/styled';
import facepaint from 'facepaint';

const mq = facepaint(
  [
    '@media(max-width: 479px)',
    '@media(min-width: 480px)',
    '@media(min-width: 768px)',
    '@media(min-width: 1200px)',
  ],
  { literal: true }
);

export const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  right: 0;
  transition: all 0.2s;
  transform: ${props => {
    if (props.className === 'menu active') {
      return 'translateX(0)';
    } else {
      // console.log(props.className);
      return 'translateX(-130%)';
    }
  }};
`;

export const Blur = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  position: absolute;
`;

export const MenuContent = styled.div`
  width: 40%;
  height: 100%;
  background-color: #025260;
  display: flex;
  z-index: 5;
  justify-content: space-between;
  flex-direction: column;
  // align-items: center;
`;

export const MenuHeader = styled.div`
  font-size: 2rem;
  color: white;
  pading: 10px;
  bprder-bottom: 1px solid white;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: flex-end;
`;

export const MobileLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #e6ba95;
    cursor: pointer;
  }
`;

export const MobileList = styled.ul`
  list-style: none;
  padding: 0px;
  align-items: center;
  display: flex;
  text-align: center;
  flex-direction: column;
  
  // line-height: 2.0;
`;

export const MobileItem = styled.li`
  //   display: flex;
  //   align-item: center;
  font-family: Raleway, sans-serif;
  font-size: 20px;
  width: auto;
  ${mq({
    marginBottom: ['18px', '18px'],
  })};
`;

export const BtnClose = styled.button`
  margin-right: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  padding: 0;
  left: 0;
  background-color: #025260;
`;


export const ContactList = styled.ul`
  padding: 0px;
  line-height: 0.5;
  ${mq({
    paddingLeft: ['10px', '10px', '0', '0'],
    MarginLeft: ['0', '0', 'auto', 'auto'],
  })};
`;

export const ContactItem = styled.li`
  list-style: none;
`;

export const Number = styled.a`
  color: white;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;

  transition: color 250ms linear, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #e6ba95;
  }
  ${mq({
    fontSize: ['10px', '14px', ],
  })};
`;

export const Mail = styled.a`
  color: white;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-decoration: none;

  transition: color 250ms linear, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #e6ba95;
  }
  padding-right: 50px;
  ${mq({
    fontSize: ['10px', '14px',],
  })};
`;