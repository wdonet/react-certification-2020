import React from 'react';
import 'jest-styled-components';
import { renderWithTheme } from '../../../utils/testing';
import { lightTheme } from '../../../providers/themes';
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

describe('Card theme', () => {
  it('applies default styling', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle(`background: ${lightTheme.color.surface}`);
  });

  it('changes "light" theme to "dark" theme', () => {});
});
