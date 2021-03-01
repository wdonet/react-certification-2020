import styled from 'styled-components';

export const Container = styled.div``;

export const Search = styled.input``;

export const RightHolder = styled.span`
  float: right;
`;

export const BurgerButton = styled.input`
  width: 30px;
  height: 30px;
`;

export const ProfileButton = styled.input`
  width: 50px;
  height: 30px;
`;

export const ToggleButton = styled.input`
  -webkit-appearance: none;
  position: relative;
  outline: none;
  width: 50px;
  height: 25px;
  background-color: blue;
  border-radius: 12px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    background-color: lightgray;
    border-radius: 12px;
  }

  &:checked {
    background-color: blue;
  }

  &:checked:before {
    transform: translate(100%);
  }
`;
