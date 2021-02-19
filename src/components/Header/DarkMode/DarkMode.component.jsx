import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const DarkModeSwitch = withStyles({
  switchBase: {
    color: '#ffffff',
    '&$checked': {
      color: '#5c3882',
    },
    '&$checked + $track': {
      backgroundColor: '#4b2e69',
    },
  },
  checked: {},
  track: {
    backgroundColor: '#ffffff',
  },
})(Switch);

const DarkMode = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<DarkModeSwitch name="darkMode" />} label="Dark mode" />
    </FormGroup>
  );
};

export default DarkMode;
