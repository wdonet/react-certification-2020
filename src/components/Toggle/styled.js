import styled from 'styled-components';

const Slider = styled.span`
  border-radius: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.font.tertiary};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    border-radius: 50%;
    position: absolute;
    content: '';
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 1.5px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const ToogleInput = styled.input`
  &:before {
    position: absolute;
    content: '';
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 1.5px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  &:checked + ${Slider} {
    background-color: ${({ theme }) => theme.font.highlight};
  }
  &:checked + ${Slider}:before {
    -webkit-transform: translateX(13px);
    -ms-transform: translateX(13px);
    transform: translateX(13px);
  }
  &:focus + ${Slider} {
    box-shadow: 0 0 1px ${({ theme }) => theme.font.highlight};
  }
`;

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 16px;
  ${ToogleInput} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export { ToogleInput, StyledLabel, Slider };
