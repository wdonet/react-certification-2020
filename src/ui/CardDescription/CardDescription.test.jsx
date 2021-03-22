import React from 'react';
import { getByRole, render } from '@testing-library/react';
import { lightTheme, darkTheme } from '../../providers/themes'
import { contextWrapper } from '../../utils' 
import AppContext from '../../providers/AppContext'
import CardDescription from './CardDescription';

const build = (Component = <CardDescription />, theme = lightTheme) => {
  const contextValue = {theme};
  const wrapped = contextWrapper(AppContext, contextValue, Component);
  const { container } = render(wrapped);
  return { container };
};

describe('CardDescription', () => {
  it('applies default styling', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle('font-weight: lighter');
  });

  it('applies colors for light theme', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle(`color: ${lightTheme.color.fontSecondary}`);
  })

  it('applies colors for light theme', () => {
    const { firstChild } = build(<CardDescription/>, darkTheme).container;
    expect(firstChild).toHaveStyle(`color: ${darkTheme.color.fontSecondary}`);
  })

  it('shows image', () => {
    const EXPECTED_ROLE = 'caption';
    const EXPECTED_CONTENT = 'Hello, this is intended to be the card description';
    const { container } = build(
      <CardDescription role={EXPECTED_ROLE}>{EXPECTED_CONTENT}</CardDescription>
    );
    expect(getByRole(container, EXPECTED_ROLE)).toHaveTextContent(EXPECTED_CONTENT);
  });
});
