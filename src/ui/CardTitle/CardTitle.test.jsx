import React from 'react';
import { getByTitle, render } from '@testing-library/react';
import { lightTheme, darkTheme } from '../../providers/themes'
import { contextWrapper } from '../../utils' 
import AppContext from '../../providers/AppContext'
import CardTitle from './CardTitle';

const build = (Component = <CardTitle />, theme = lightTheme) => {
  const contextValue = { theme };
  const wrapped = contextWrapper(AppContext, contextValue, Component);
  const { container } = render(wrapped);
  return { container };
};

describe('CardTitle', () => {
  it('applies default styling', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle('font-weight: normal');
    expect(firstChild).toHaveStyle('font-size: 1.25rem');
  });

  it('applies colors for light theme', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle(`color: ${ lightTheme.color.fontPrimary }`);
  });

  it('applies colors for dark theme', () => {
    const { firstChild } = build(<CardTitle/>, darkTheme).container;
    expect(firstChild).toHaveStyle(`color: ${ darkTheme.color.fontPrimary }`);
  });

  it('displays title and contains "title" attribute', () => {
    const EXPECTED_TITLE_ATTRIBUTE_VALUE = 'Title';
    const EXPECTED_TITLE = '';
    const { container } = build(
      <CardTitle title={EXPECTED_TITLE_ATTRIBUTE_VALUE}>{EXPECTED_TITLE}</CardTitle>
    );
    expect(getByTitle(container, EXPECTED_TITLE_ATTRIBUTE_VALUE)).toHaveTextContent(
      EXPECTED_TITLE
    );
  });
});
