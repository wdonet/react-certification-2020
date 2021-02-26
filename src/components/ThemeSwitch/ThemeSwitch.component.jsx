import React from 'react';
import Switch from '@material-ui/core/Switch';
import { Container } from './styled';
import SunIcon from '../Icons/SunIcon';
import MoonIcon from '../Icons/MoonIcon';

const ThemeSwitch = () => {
  return (
    <Container>
      <MoonIcon />
      <Switch
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <SunIcon />
    </Container>
  );
};

export default ThemeSwitch;
