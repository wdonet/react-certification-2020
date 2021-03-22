import React from 'react';
import 'jest-styled-components';
import { getByRole, render } from '@testing-library/react';
import { contextWrapper } from '../../utils';
import { lightTheme } from '../../providers/themes';
import AppContext from '../../providers/AppContext';
import Card from './Card';

const build = (Component = <Card />, theme = lightTheme) => {
  const wrapped = contextWrapper(AppContext, { theme }, Component);
  const { container } = render(wrapped);
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
    expect(firstChild).toHaveStyle('border-radius: 5px');
  });

  it('applies colors for light theme', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle(`box-shadow: 2px 2px 2px 2px ${lightTheme.color.surfaceShadow}`);
    expect(firstChild).toHaveStyle(`background: ${lightTheme.color.surface}`);
  });

  it('applies colors for light theme', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle(`box-shadow: 2px 2px 2px 2px ${lightTheme.color.surfaceShadow}`);
    expect(firstChild).toHaveStyle(`background: ${lightTheme.color.surface}`);
  });

  it('has role and all passed props', () => {
    const EXPECTED_ROLE = 'figure';
    const EXPECTED_CONTENT = "Hi, I'm your card content";
    const { container } = build(<Card role={EXPECTED_ROLE}>{EXPECTED_CONTENT}</Card>);
    expect(getByRole(container, EXPECTED_ROLE)).toBeInTheDocument();
    expect(container).toHaveTextContent(EXPECTED_CONTENT);
  });
});
