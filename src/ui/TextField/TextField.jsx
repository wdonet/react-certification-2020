import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../providers/AppContext';

const StyledTextField = styled.input`
  background: ${({theme}) => theme.color.secondary };
  color: ${({theme}) => theme.color.fontPrimary };
  border-radius: 4px;
  padding: 8px;
  border: 0;
`;

const TextField = ({ role, onChange, onKeyPress }, ref) => {
  const { theme } = useContext(AppContext);
  return (
    <StyledTextField
      theme={theme}
      ref={ref}
      role={role}
      onChange={(event) => onChange && onChange(event.target.value)}
      onKeyPress={(event) => onKeyPress && onKeyPress(event)}
    />
  );
};

export default React.forwardRef((props, ref) => TextField(props, ref));
