import React from 'react';
import 'jest-styled-components';
import { getByRole, render } from '@testing-library/react';
import AppContext from '../../providers/AppContext';
import { contextWrapper } from '../../utils';
import { darkTheme, lightTheme } from '../../providers/themes';
import Header from './Header';

const build = (Component = <Header />, theme = lightTheme) => {
  const contextValue = { setHomeVideosView: jest.fn(), theme };
  const wrapped = contextWrapper(
    AppContext,
    contextValue,
    Component,
  );
  const { container } = render(wrapped);
  return {
    container,
    HamburguerIcon: () => getByRole(container, 'button', { name: 'hamburguer' }),
    SearchInput: () => getByRole(container, 'search'),
    ThemeModeSwitch: () => getByRole(container, 'switch'),
    UserAvatar: () => getByRole(container, 'button', { name: 'profile' }),
  };
};

describe('Header', () => {
  it('renders', () => {
    const { container } = build();
    expect(container).toMatchSnapshot();
  });

  it('displays its default content', () => {
    const { HamburguerIcon, SearchInput, ThemeModeSwitch, UserAvatar } = build();
    expect(HamburguerIcon()).toBeInTheDocument();
    expect(SearchInput()).toBeInTheDocument();
    expect(ThemeModeSwitch()).toBeInTheDocument();
    expect(UserAvatar()).toBeInTheDocument();
  });
});

describe('Header styles', () => {
  it('applies default styling', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle('display: flex');
    expect(firstChild).toHaveStyle('align-items: center');
    expect(firstChild).toHaveStyle('justify-content: space-between');
    expect(firstChild).toHaveStyle('width: 100%');
    expect(firstChild).toHaveStyle('height: 64px');
    expect(firstChild).toHaveStyle('overflow: hidden');
    expect(firstChild).toHaveStyle('position: fixed');
    expect(firstChild).toHaveStyle('top: 0');
  });

  it('applies background color for light theme', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle(`background-color: ${lightTheme.color.primary}`);
  })

  it('applies background color for dark theme', () => {
    const { firstChild } = build(<Header />, darkTheme).container;
    expect(firstChild).toHaveStyle(`background-color: ${darkTheme.color.primary}`);
  })

});
