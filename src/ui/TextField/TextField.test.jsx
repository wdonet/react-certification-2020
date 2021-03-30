import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { contextWrapper } from '../../utils/';
import { lightTheme } from '../../providers/themes';
import AppContext from '../../providers/AppContext';
import TextField from './TextField';

const build = (Component = <TextField />) => {
  const contextValue = { theme: lightTheme };
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
});
