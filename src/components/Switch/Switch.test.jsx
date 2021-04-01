import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SwitchContainer } from './Switch.styled';
import { storage } from '../../utils/storage';
import Switch from '.';

const valueName = 'testName';
const textOn = 'Yes';
const textOff = 'No';
const onToggle = jest.fn(() => {});

test("Switch contains all of it's parts", () => {
  const { container } = render(
    <Switch valueName={valueName} textOn={textOn} textOff={textOff} onToggle={onToggle} />
  );

  const switchContainer = document.getElementsByClassName(
    SwitchContainer.styledComponentId
  )[0];
  expect(container.children).toContain(switchContainer);

  const label = document.querySelector(`label[for='${valueName}']`);
  expect(switchContainer.children).toContain(label);

  const input = document.querySelector(`input[id='${valueName}']`);
  expect(label.children).toContain(input);

  const innerElement = document.querySelector('.inner');
  expect(label.children).toContain(innerElement);

  const switchElement = document.querySelector('.switch');
  expect(label.children).toContain(switchElement);
});

test('Renders without text', () => {
  const { container } = render(<Switch valueName={valueName} onToggle={onToggle} />);

  const switchContainer = document.getElementsByClassName(
    SwitchContainer.styledComponentId
  )[0];
  expect(container.children).toContain(switchContainer);

  const label = document.querySelector(`label[for='${valueName}']`);
  expect(switchContainer.children).toContain(label);

  const input = document.querySelector(`input[id='${valueName}']`);
  expect(label.children).toContain(input);

  const innerElement = document.querySelector('.inner');
  expect(label.children).toContain(innerElement);

  const switchElement = document.querySelector('.switch');
  expect(label.children).toContain(switchElement);
});

test('Toggle value on click', () => {
  render(
    <Switch valueName={valueName} textOn={textOn} textOff={textOff} onToggle={onToggle} />
  );

  const input = document.querySelector(`input[id='${valueName}']`);

  fireEvent.click(input);
  expect(onToggle).toHaveBeenCalledWith(true);
  expect(storage.get(valueName)).toBeTruthy();

  fireEvent.click(input);
  expect(onToggle).toHaveBeenCalledWith(false);
  expect(storage.get(valueName)).not.toBeTruthy();

  fireEvent.click(input);
  expect(onToggle).toHaveBeenCalledWith(true);
  expect(storage.get(valueName)).toBeTruthy();
});
