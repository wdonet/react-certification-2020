import React from 'react';
import 'jest-styled-components';
import { renderWithTheme } from '../../../utils/testing';
import { lightTheme } from '../../../providers/theme/themes';
import Card from './Card';

const build = (Component = <Card />, theme = lightTheme) => {
  const { container } = renderWithTheme(Component, theme);
  return { container };
};

describe('Card', () => {
  it('renders', () => {
    const container = build();
    expect(container).toMatchSnapshot();
  });
});

describe('Card styles and props', () => {
  it('applies default styling', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle('overflow: hidden');
    expect(firstChild).toHaveStyle('height: 345px');
    expect(firstChild).toHaveStyle('width: 345px');
    expect(firstChild).toHaveStyle('margin: 8px');
    expect(firstChild).toHaveStyle('box-shadow: 2px 2px 2px 2px #ccc');
    expect(firstChild).toHaveStyle('border-radius: 5px');
  });

  it('has all passed props', () => {
    const EXPECTED_CONTENT = "Hi, I'm your card content";
    const { firstChild } = build(<Card>{EXPECTED_CONTENT}</Card>).container;
    expect(firstChild).toHaveTextContent(EXPECTED_CONTENT);
  });
});
