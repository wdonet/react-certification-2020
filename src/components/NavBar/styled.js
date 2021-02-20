import styled from 'styled-components';
import { MenuAltLeft } from '@styled-icons/boxicons-regular/MenuAltLeft';
import { AccountCircle } from '@styled-icons/material/AccountCircle';

const MenuIcon = styled(MenuAltLeft)`
  color: white;
  width: 50px;
  height: 50px;
`;

const AccountIcon = styled(AccountCircle)`
  color: white;
  width: 50px;
  height: 50px;
  float: right;
  margin-left: 30px;
`;

const Input = styled.input`
  ::placeholder {
    color: palevioletred;
  }
  color: gray;
  font-size: 1.2rem;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  outline: none;
  margin-left: 40px;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  background-color: #3fc7cb;
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

const Styled = {
  Nav,
  NavContent,
  MenuIcon,
  AccountIcon,
  Input,
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
  NavElementsWrapper,
};
export default Styled;
