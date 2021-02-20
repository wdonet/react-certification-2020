import React from 'react';

import { SvgWrapper } from './SvgIcon.styled';

const SvgIcon = ({
  children,
  color,
  viewBox = '0 0 24 24',
  focusable = false,
  size = '1.5rem',
  ...rest
}) => {
  return (
    <SvgWrapper
      viewBox={viewBox}
      focusable={focusable}
      size={size}
      {...rest}
      color={color}
    >
      {children}
    </SvgWrapper>
  );
};

export default SvgIcon;
