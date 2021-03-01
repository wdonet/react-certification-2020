import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../config/colors';
import device from '../../config/device';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'menu';
  grid-template-rows: 8rem auto 7rem;

  @media ${device.laptop} {
    grid-template-areas:
      'header header'
      'menu content';
    grid-template-rows: 9rem auto;
    grid-template-columns: ${(props) => (props.isMenuExpanded ? '20rem' : '9rem')} auto;
  }
`;

const Header = styled.header`
  grid-area: header;
  background-color: ${(props) => props.theme.menuBackground};
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HeaderLeft = styled(HeaderItem)`
  justify-content: flex-start;
  @media ${device.laptop} {
    flex-basis: 14rem;
  }
`;

const HeaderCenter = styled(HeaderItem)`
  justify-content: flex-end;
  flex: 1;
  @media ${device.laptop} {
    justify-content: center;
  }
`;

const HeaderRight = styled(HeaderItem)`
  justify-content: flex-end;
  @media ${device.laptop} {
    flex-basis: 8rem;
  }
`;

const MenuHamburger = styled.button`
  position: relative;
  background: none;
  display: none;
  padding: 1.5rem 1rem;
  height: 4rem;
  width: 5rem;
  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  &:focus,
  &:hover {
    outline: none;
    box-shadow: none;
    &::before,
    &::after {
      background-color: ${(props) => props.theme.menuButtonActive};
    }
  }
  &::before,
  &::after {
    content: '';
    background-color: ${(props) => props.theme.menuButton};
    display: block;
    height: 0.3rem;
    width: ${(props) => (props.isMenuExpanded ? '3rem' : '2rem')};
    transition: ${(props) => props.theme.transitionFast};
  }
  &:active {
    animation-name: '';
  }
`;

const Logo = styled(Link)`
  color: inherit;
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
`;

const Menu = styled.nav`
  grid-area: menu;
  background-color: ${(props) => props.theme.menuBackground};
  padding: 1rem;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  @media ${device.laptop} {
    border-top: 0;
    border-right: 1px solid ${(props) => props.theme.borderColor};
    padding: 2rem;
  }
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 100%;
  @media ${device.laptop} {
    flex-direction: column;
    justify-content: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    height: auto;
  }
`;

const MenuItem = styled.li`
  color: ${(props) => (props.active ? colors.gray100 : props.theme.textSecondary)};
  padding: 0.5rem;
  width: 5rem;
  height: 5rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 0;
  @media ${device.laptop} {
    width: 100%;
  }
  &[disabled] {
    cursor: not-allowed;
  }
  &:not([disabled]) {
    &::before {
      content: '';
      background-color: ${(props) =>
        props.active ? props.theme.primary : 'transparent'};
      border-radius: ${(props) => props.theme.borderRadiusLg};
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      transition: ${(props) => props.theme.transitionDefault};
    }
    &:hover {
      color: ${colors.gray100};
      &::before {
        background-color: ${(props) => props.theme.primary};
        animation-name: ${(props) => (props.active ? '' : 'menu-button-animation')};
        animation-timing-function: ease-in;
        animation-duration: 300ms;
      }
    }
  }
`;

const MenuLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
`;

const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  @media ${device.laptop} {
    flex-direction: ${(props) => (props.isMenuExpanded ? 'row' : 'column')};
    justify-content: ${(props) => (props.isMenuExpanded ? 'flex-start' : 'space-around')};
    padding: ${(props) => (props.isMenuExpanded ? '1.5rem' : '0')};
  }
  ${MenuItem}:hover & {
    color: ${(props) => props.theme.white};
  }
  span {
    display: inline-block;
    font-size: 1rem;
    @media ${device.laptop} {
      font-size: ${(props) => (props.isMenuExpanded ? '1.4rem' : '1rem')};
      margin-left: ${(props) => (props.isMenuExpanded ? '2rem' : '0')};
    }
  }
`;

const MainContent = styled.main`
  grid-area: content;
  background-color: ${(props) => props.theme.background};
  overflow-y: auto;
`;

export {
  Container,
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderCenter,
  Logo,
  Menu,
  MenuHamburger,
  MenuList,
  MenuItem,
  MenuLink,
  MenuIcon,
  MainContent,
};
