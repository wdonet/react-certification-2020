import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { contextWrapper } from '../../utils/';
import { lightTheme, darkTheme } from '../../providers/themes';
import AppContext from '../../providers/AppContext';
import TextField from './TextField';

const build = (Component = <TextField />, theme = lightTheme) => {
  const contextValue = { theme };
  const wrapped = contextWrapper(AppContext, contextValue, Component);
  const { container } = render(wrapped);
  return { container };
};

describe('TextField', () => {
  it('renders', () => {
    const { container } = build();
    expect(container).toMatchSnapshot();
  });
});

describe('TextField styles', () => {
  it('applies default styling', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle('border-radius: 4px');
    expect(firstChild).toHaveStyle('padding: 8px');
    expect(firstChild).toHaveStyle('border: 0');
  });

  it('applies theme colors for light theme', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle(`background: ${lightTheme.color.secondary}`);
    expect(firstChild).toHaveStyle(`color:${lightTheme.color.fontPrimary}`);
  })

  it('applies theme colors for light theme', () => {
    const { firstChild } = build(<TextField />, darkTheme).container;
    expect(firstChild).toHaveStyle(`background: ${darkTheme.color.secondary}`);
    expect(firstChild).toHaveStyle(`color:${darkTheme.color.fontPrimary}`);
  })

});
