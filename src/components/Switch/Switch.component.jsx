import React, { useState } from 'react';
import { storage } from '../../utils/storage';
import { SwitchContainer } from './Switch.styled';

function Switch({ valueName, textOn = '', textOff = '', onToggle }) {
  const [value, setValue] = useState(storage.get(valueName));

  function toggleSwitch() {
    const newValue = !value;
    storage.set(valueName, newValue);
    onToggle(newValue);
    setValue(newValue);
  }

  return (
    <SwitchContainer textOn={textOn} textOff={textOff}>
      <label htmlFor={valueName}>
        <input
          type="checkbox"
          id={valueName}
          name={valueName}
          alt="Theme"
          onClick={toggleSwitch}
          defaultChecked={value}
        />
        <span className="inner" />
        <span className="switch" />
      </label>
    </SwitchContainer>
  );
}

export default Switch;
