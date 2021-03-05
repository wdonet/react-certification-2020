import styled from 'styled-components';
import Logo from './logo.png';
import Menu from './menu.png';

const StyledHeader = styled.header`
  display: inline-flex;
  width: 100%;
  top: 0;
  position: absolute;
  height: 50px;
  border: 3px solid red;
  appearance: none;
  background: none;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 0px 16px 16px;
  box-shadow: 0px 5px rgba(0, 0, 0, 0.2);
  color: #0c000c;
  font-size: 20px;
  transition: 0.4s ease;
`;

const StyledInput = styled.input.attrs({ type: 'text', placeholder: 'Wizeline' })`
  border-radius: 25px;
  display: block;
  border: 3px solid;
  padding: 10px;
  appearance: none;
  background: none;
  border: none;
  outline: none;
  background-color: #eceef1;
  font-size: 20px;
  transition: 0.4s ease;
  @media screen and (max-width: 450px) {
    font-size: 14px;
    height: 35px;
    margin-top: 5px;
  }
`;

const StyledDivInput = styled.div`
  width: 25%;
`;

const StyledDivToggle = styled.div`
  position: relative;
  float: right;
  margin-right: 20px;
  margin-top: 10px;
  @media screen and (max-width: 450px) {
    position: absolute;
    right: 40px;
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
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #313131;
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

const StyledLogo = styled.img.attrs({
  src: `${Logo}`,
})`
  color: transparent;
  overflow: hidden;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  float: right;
  margin-right: 20px;
  margin-top: 5px;
`;

const DarkModeStyle = styled.div`
  font-size: 18px;
  margin-left: 50px;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const StyledDivLogo = styled.div`
  position: absolute;
  right: 0;
  width: 25%;
`;

const MenuContent = styled.div`
  height: 100%;
  width: 40%;
  background-color: white;
  position: absolute;
  display: none;
`;

const StyledMenu = styled.img.attrs({
  src: `${Menu}`,
})`
  color: transparent;
  overflow: hidden;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  left: 0;

  ${MenuContent}:hover & {
    display: inline;
    background-color: yellow;
  }
`;

const Styled = {
  StyledHeader,
  StyledInput,
  StyledDivInput,
  StyledDivToggle,
  StyledLogo,
  StyledDivLogo,
  StyledMenu,
  CheckBoxLabel,
  CheckBox,
  DarkModeStyle,
  MenuContent,
};
export default Styled;
