import React from 'react';
import 'jest-styled-components';
import TextField from './TextField';
import { render } from '@testing-library/react';

const build = (Component = <TextField />) => {
  const { container } = render(Component);
  return { container };
}

describe('TextField', () => {
  it('renders', () => {
    const { container } = build();
    expect(container).toMatchSnapshot();
  });
});

describe('TextField styles', () => {
  it('applies default styling', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle('background: #26a69a');
    expect(firstChild).toHaveStyle('color: white');
    expect(firstChild).toHaveStyle('border-radius: 4px');
    expect(firstChild).toHaveStyle('padding: 8px');
    expect(firstChild).toHaveStyle('border: 0');
  });
});
