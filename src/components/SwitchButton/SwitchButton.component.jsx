import React from 'react';
import {
  SwitchInputContainer,
  SwitchInput,
  SwitchLabel,
  SwitchSpan,
} from './SwitchButton.styles';

function SwitchButton({ toggled, onChange }) {
  return (
    <SwitchInputContainer>
      <SwitchInput
        id="switch-input"
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel htmlFor="switch-input">
        <SwitchSpan />
      </SwitchLabel>
      Dark Mode
    </SwitchInputContainer>
  );
}

export default SwitchButton;
