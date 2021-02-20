import React from 'react';
import { StyledToolbar } from './styled';

const Toolbar = ({ children }) => {
  return <StyledToolbar>{children}</StyledToolbar>;
};

Toolbar.propTypes = {};

export default Toolbar;
