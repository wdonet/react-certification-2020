import React from 'react';
import styled from 'styled-components';

const StyledTextField = styled.input`
  background: #26a69a;
  color: white;
  border-radius: 4px;
  padding: 8px;
  border: 0;
`;

const TextField = ({ role }) => {
  return <StyledTextField role={role}/>;
};

export default TextField;
