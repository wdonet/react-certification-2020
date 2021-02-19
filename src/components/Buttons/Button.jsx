import React from 'react';
import styled from 'styled-components';

function Button(props) {
  const ButtonComponent = styled.button`
    background: white;
    color: red;

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid red;
    border-radius: 3px;
  `;
  return <ButtonComponent>{props.children}</ButtonComponent>;
}

function FilledButton(props) {
  const ButtonComponent = styled.button`
    background: red;
    color: white;

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid red;
    border-radius: 3px;
  `;
  return <ButtonComponent>{props.children}</ButtonComponent>;
}
export { Button, FilledButton };
