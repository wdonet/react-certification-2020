import React from 'react';
import 'jest-styled-components';
import { fireEvent, render } from '@testing-library/react';
import { contextWrapper } from '../../utils';
import { darkTheme, lightTheme } from '../../providers/themes';
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

describe('Card theme behavior', () => {

  it('triggers "onClick"', () => {
    const mockedFunction = jest.fn();
    const { firstChild } = build(<Card onClick={mockedFunction} />).container;
    fireEvent.click(firstChild);

    expect(mockedFunction).toBeCalledTimes(1);
  });
  
  it('applies colors for light theme', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle(`box-shadow: 2px 2px 2px 2px ${lightTheme.color.surfaceShadow}`);
    expect(firstChild).toHaveStyle(`background: ${lightTheme.color.surface}`);
  });

  it('applies colors for dark theme', () => {
    const { firstChild } = build(<Card/>, darkTheme).container;
    expect(firstChild).toHaveStyle(`box-shadow: 2px 2px 2px 2px ${darkTheme.color.surfaceShadow}`);
    expect(firstChild).toHaveStyle(`background: ${darkTheme.color.surface}`);
  });

});
