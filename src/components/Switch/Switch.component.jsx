import React, { useState } from 'react';
import { storage } from '../../utils/storage';
import { SwitchContainer } from './Switch.styled';

function Switch({ name, textOn = '', textOff = '', onToggle }) {
  const [value, setValue] = useState(storage.get(name));

  function toggleSwitch() {
    const newValue = !value;
    storage.set(name, newValue);
    onToggle(newValue);
    setValue(newValue);
  }

  return (
    <SwitchContainer textOn={textOn} textOff={textOff}>
      <label htmlFor={name}>
        <input
          type="checkbox"
          name={name}
          id={name}
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
