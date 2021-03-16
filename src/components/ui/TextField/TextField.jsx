import React from 'react';
import styled from 'styled-components';

const StyledTextField = styled.input`
  background: #26a69a;
  color: white;
  border-radius: 4px;
  padding: 8px;
  border: 0;
`;

const TextField = ({ role, onChange, onKeyPress }, ref) => {
  return (
    <StyledTextField
      ref={ref}
      role={role}
      onChange={(event) => onChange && onChange(event.target.value)}
      onKeyPress={(event) => onKeyPress && onKeyPress(event)}
    />
  );
};

export default React.forwardRef((props, ref) => TextField(props, ref));
