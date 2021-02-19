import React, { useState } from "react";
import Switch from 'react-switch';
import { DisplayToggleWrapper } from './DisplayToggle.styled';

function DisplayToggle() {
  const [checked, setChecked] = useState(false);

  const toggle = React.useCallback(() => {
    setChecked((v) => !v);
  }, []);

  return (
    <DisplayToggleWrapper>
      <Switch
        onChange={toggle}
        uncheckedIcon={false}
        checkedIcon={false}
        checked={checked}
        handleDiameter={30}
        height={20}
        width={48}
        // boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      />
      Dark mode
    </DisplayToggleWrapper>
  );
}

export default DisplayToggle;
