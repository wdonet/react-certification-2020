import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input``;

const Switch = (props) => {
  return <StyledInput {...props} role="switch" type="checkbox" />;
};

export default Switch;
