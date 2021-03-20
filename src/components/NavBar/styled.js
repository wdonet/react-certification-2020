import styled from 'styled-components';
import { Dehaze } from '@styled-icons/material-outlined/Dehaze';

const MenuIcon = styled(Dehaze)`
  color: white;
  width: 50px;
  height: 50px;
`;

const Nav = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.navBar};
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 60px;
  z-index: 2;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 8px;
  &:checked + ${CheckBoxLabel} {
    background: green;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const NavElementsWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export {
  Nav,
  NavContent,
  MenuIcon,
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
  NavElementsWrapper,
};
