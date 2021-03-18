import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 34px;
`;

const CheckBox = styled.input`
  opacity: 0;

  &:checked + .slider {
    background-color: #2196f3;
  }

  &:checked + .slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
`;

const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 12px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 12px;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    top: -4px;
    height: 20px;
    width: 20px;
    left: 0px;
    //bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 1 1 20px #2196f3;
  }

  &.round {
    border-radius: 34px;
  }

  &.round:before {
    border-radius: 50%;
  }
`;

const Text = styled.span`
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

function ToggleButton({ text }) {
  return (
    <Div>
      <Label>
        <CheckBox type="checkbox" />
        <Span className="slider round" />
      </Label>
      <Text>{text}</Text>
    </Div>
  );
}

export default ToggleButton;
