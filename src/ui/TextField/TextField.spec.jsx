import React from 'react';
import 'jest-styled-components';
import { fireEvent, render } from '@testing-library/react';
import { darkTheme, lightTheme } from '../../providers/themes';
import { contextWrapper } from '../../utils';
import AppContext from '../../providers/AppContext';
import TextField from './TextField';

const build = (Component = <TextField />, theme = lightTheme) => {
  const contextValue = { theme };
  const wrapped = contextWrapper(AppContext, contextValue, Component);
  const { container } = render(wrapped);
  return { container };
};

describe('TextField styles', () => {
  it('changes value on typing', () => {
    const EXPECTED_TEXT = 'This is my text';
    const { firstChild: input } = build().container;
    fireEvent.change(input, { target: { value: EXPECTED_TEXT } });
    expect(input.value).toBe(EXPECTED_TEXT);
  });

  it('reflects user intput', () => {
    const EXPECTED_TEXT = 'This is my text';
    const { firstChild: input } = build(<TextField />).container;
    fireEvent.change(input, { target: { value: EXPECTED_TEXT } });
  });

  it('calls onChange function parameter', () => {
    const mockedFunction = jest.fn();
    const EXPECTED_TEXT = 'This is my text';
    const { firstChild: input } = build(
      <TextField onChange={mockedFunction} />
    ).container;
    fireEvent.change(input, { target: { value: EXPECTED_TEXT } });
    expect(mockedFunction).toHaveBeenCalled();
  });

  it('calls onKeyPress function parameter', () => {
    const mockedFunction = jest.fn();
    const { firstChild: input } = build(
      <TextField onKeyPress={mockedFunction} />
    ).container;
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    expect(mockedFunction).toHaveBeenCalled();
  });

  it('contains passed id', () => {
    const EXPECTED_ID = "textfield";
    const { firstChild: input } = build(<TextField  id={EXPECTED_ID}/>).container;
    expect(input).toHaveProperty(`id`, EXPECTED_ID);
  });

  it('contains passed type', () => {
    const EXPECTED_TYPE = "password";
    const { firstChild: input } = build(<TextField  type={EXPECTED_TYPE}/>).container;
    expect(input).toHaveProperty(`type`, EXPECTED_TYPE);
  });

  it('applies theme colors for light theme', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle(`background: ${lightTheme.color.secondary}`);
    expect(firstChild).toHaveStyle(`color:${lightTheme.color.fontPrimary}`);
  })

  it('applies theme colors for dark theme', () => {
    const { firstChild } = build(<TextField />, darkTheme).container;
    expect(firstChild).toHaveStyle(`background: ${darkTheme.color.secondary}`);
    expect(firstChild).toHaveStyle(`color:${darkTheme.color.fontPrimary}`);
  })
});
