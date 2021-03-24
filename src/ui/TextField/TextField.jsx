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

const TextField = (props, ref) => {
  const { theme } = useContext(AppContext);
  const { onChange, onKeyPress } = props;
  const condensedProps = {...props, ref, theme}
  return (
    <StyledTextField
      {...condensedProps}
      onChange={(event) => onChange && onChange(event.target.value)}
      onKeyPress={(event) => onKeyPress && onKeyPress(event)}
    />
  );
};

export default React.forwardRef((props, ref) => TextField(props, ref));
