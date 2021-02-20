import React from 'react';
import { StyledButton } from './styled';

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

Button.propTypes = {};

export default Button;
