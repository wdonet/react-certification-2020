import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../config/colors';
import device from '../../config/device';

const Container = styled.section`
  padding: 2rem;
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
`;

const Card = styled.li`
  padding: 1rem;
  width: 100%;
  @media ${device.mobileMd} {
    width: calc(100% / 2);
  }
  @media ${device.tablet} {
    width: calc(100% / 3);
  }
  @media ${device.laptop} {
    width: calc(100% / 4);
  }
  @media ${device.laptopLg} {
    width: calc(100% / 5);
  }
  @media ${device.desktop} {
    width: calc(100% / 6);
  }
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.heroBackground};
  margin-bottom: 2rem;
  text-align: center;
  padding: 1rem;
  border-radius: ${(props) => props.theme.borderRadiusLg};
  @media ${device.laptop} {
    padding: 3rem;
  }
`;

const ButtonsContainer = styled.div`
  display: inline-block;
  padding: 2rem 0 0;
  @media ${device.laptop} {
    padding-top: 3rem;
  }
`;

const ButtonLink = styled(Link)`
  border: none;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 2rem 3rem;
  text-decoration: none;
  @media ${device.onlySm} {
    margin-bottom: 2rem;
  }
  svg {
    font-size: 1.6rem;
    vertical-align: bottom;
    margin-right: 0.5rem;
  }
`;

const ButtonLinkInfo = styled(ButtonLink)`
  background-color: ${colors.purple900};
  color: ${colors.blue400};
  border-radius: ${(props) => props.theme.borderRadiusLg};
  margin-left: 1rem;
`;

const ButtonLinkWarning = styled(ButtonLink)`
  background-color: ${colors.orange400};
  color: ${colors.gray100};
  border-radius: ${(props) => props.theme.borderRadiusLg};
  margin-right: 1rem;
`;

export {
  Container,
  CardList,
  Card,
  Header,
  ButtonsContainer,
  ButtonLinkInfo,
  ButtonLinkWarning,
};
