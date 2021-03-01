import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../config/colors';

const User = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 5rem;
  margin-left: 2rem;
  padding: 0;
  position: relative;
  &:active {
    animation-name: unset;
  }
  &::before {
    content: '';
    position: absolute;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.avatarBackground};
    z-index: 0;
  }
  svg {
    color: ${(props) => props.theme.avatarColor};
    z-index: 1;
  }
`;

const Container = styled.div`
  padding: 2rem;
  width: 300px;
`;

const Header = styled.div`
  padding-right: 3rem;
`;

const Content = styled.div`
  margin: 0 -2rem;
`;

const OptionsList = styled.ul`
  border-top: 1px solid ${(props) => props.theme.borderColor};
  margin-top: 2rem;
  padding-top: 1rem;
  position: relative;
`;

const OptionsListItem = styled.li`
  position: relative;
  &::before {
    content: '';
    background-color: transparent;
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
      animation-name: menu-button-animation;
      animation-timing-function: ease-in;
      animation-duration: 300ms;
    }
  }
  svg {
    font-size: 2rem;
    margin-right: 2rem;
    vertical-align: sub;
  }
`;

const OptionsLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  vertical-align: sub;
  padding: 2rem;
  width: 100%;

  display: inline-block;
`;

const OptionsButton = styled.button`
  color: inherit;
  text-decoration: none;
  vertical-align: sub;
  padding: 2rem;
  width: 100%;

  font-weight: 400;
  text-align: left;
  &:active {
    animation-name: unset;
  }
`;

const CloseButton = styled.button`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 2rem;
  &::before,
  &::after {
    content: '';
    display: inline-block;
    height: 0.3rem;
    width: 1.5rem;
    background-color: ${(props) => props.theme.text};
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center;
    transition: ${(props) => props.theme.transitionDefault};
  }
  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:focus {
    &::before,
    &::after {
      transform: translate(-50%, -50%) rotate(0deg) scale(0.5);
    }
  }
`;

export {
  User,
  Container,
  Header,
  Content,
  OptionsList,
  OptionsListItem,
  OptionsLink,
  OptionsButton,
  CloseButton,
};
