import React from 'react';
import styled from 'styled-components';

function TextInput(props) {
  const Input = styled.input`
    background: ${(prop) => (prop.primary ? 'red' : 'white')};
    color: ${(prop) => (prop.primary ? 'white' : 'red')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid red;
    border-radius: 3px;
  `;
  return <Input type="text" placeholder={props.placeholder} />;
}

export default TextInput;
