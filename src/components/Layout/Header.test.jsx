import React from 'react';
import 'jest-styled-components';
import { getByTestId, render } from '@testing-library/react';
import Header from './Header';

const build = (Component = <Header />) => {
  const { container } = render(Component);
  return {
    container,
    HamburguerIcon: () => getByTestId(container, 'hamburguer-icon'),
    SearchInput: () => getByTestId(container, 'search-input'),
    ThemeModeSwitch: () => getByTestId(container, 'theme-mode-switch'),
    UserAvatar: () => getByTestId(container, 'user-avatar'),
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
