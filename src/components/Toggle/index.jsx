import React from 'react';
import { StyledLabel, ToogleInput, Slider } from './styled';

const Toggle = ({ onChange }) => {
  return (
    <StyledLabel>
      <ToogleInput onChange={onChange} type="checkbox" />
      <Slider />
    </StyledLabel>
  );
};

export default Toggle;
