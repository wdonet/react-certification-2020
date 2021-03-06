import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from '.';
import { SwitchContainer } from './Switch.styled';
import { storage } from '../../utils/storage';

const name = 'testName';
const textOn = 'Yes';
const textOff = 'No';
const onToggle = jest.fn(() => {});

test("Switch contains all of it's parts", () => {
  const { container } = render(
    <Switch name={name} textOn={textOn} textOff={textOff} onToggle={onToggle} />
  );

  const switchContainer = document.getElementsByClassName(
    SwitchContainer.styledComponentId
  )[0];
  expect(container.children).toContain(switchContainer);

  const label = document.querySelector(`label[for='${name}']`);
  expect(switchContainer.children).toContain(label);

  const input = document.querySelector(`input[id='${name}']`);
  expect(label.children).toContain(input);

  const innerElement = document.querySelector('.inner');
  expect(label.children).toContain(innerElement);

  const switchElement = document.querySelector('.switch');
  expect(label.children).toContain(switchElement);
});

test('Toggle value on click', () => {
  render(<Switch name={name} textOn={textOn} textOff={textOff} onToggle={onToggle} />);

  const input = document.querySelector(`input[id='${name}']`);

  fireEvent.click(input);
  expect(onToggle).toHaveBeenCalledWith(true);
  expect(storage.get(name)).toBeTruthy();
  fireEvent.click(input);
  expect(onToggle).toHaveBeenCalledWith(false);
  expect(storage.get(name)).not.toBeTruthy();
  fireEvent.click(input);
  expect(onToggle).toHaveBeenCalledWith(true);
  expect(storage.get(name)).toBeTruthy();
});
