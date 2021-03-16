import React from 'react';
import 'jest-styled-components';
import { fireEvent } from '@testing-library/dom';
import { renderWithTheme } from '../../../utils';
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

  it('triggers "onClick"', () => {
    const mockedFunction = jest.fn();
    const { firstChild } = build(<Card onClick={mockedFunction} />).container;

    fireEvent.click(firstChild);

    expect(mockedFunction).toBeCalledTimes(1);
  });

  it.todo('changes "light" theme to "dark" theme');
});
