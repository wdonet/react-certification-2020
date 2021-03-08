import React from 'react';
import 'jest-styled-components';
import { getByRole, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import AppContext from '../../providers/AppContext';
import { contextWrapper } from '../../utils';

const build = (Component = <Header />) => {
  const WrapInAppContext = contextWrapper(AppContext, {setHomeVideosView:jest.fn()}, Component);
  const { container } = render(
    <ThemeProvider theme={{ switchTheme: jest.fn() }}>{WrapInAppContext}</ThemeProvider>
  );
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
    expect(firstChild).toHaveStyle('background-color: #00695c');
    expect(firstChild).toHaveStyle('overflow: hidden');
    expect(firstChild).toHaveStyle('position: fixed');
    expect(firstChild).toHaveStyle('top: 0');
  });
});
