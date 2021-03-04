import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input``;

const Switch = ({ onClick }) => {
  return <StyledInput onClick={onClick} role="switch" type="checkbox" />;
};

export default Switch;
